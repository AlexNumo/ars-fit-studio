import { useSelector } from 'react-redux';
import { BsSuitHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import { VisitTrainingsGraphic } from '../Graphics/TrainingsGraphic';
import VisibleTrainings from '../VisibleTrainings/VisibleTrainings';
import {
  Title,
} from './Subscription.styled';
import BuySubscription from './BuySubscription/BuySubscription';

const Subscription = () => {
  const user = useSelector((state) => state.user);
  const [openCheckTrainings, setOpenCheckTrainings] = useState(false);
  const [isViewTrainings, setIsViewTrainings] = useState();
  const nameSeasonTicket = user.seasonTickets.name;
  const buySeasonTicket = user.seasonTickets.dateOfBuying;
  // const limitSeasonTicket = user.seasonTickets[user.seasonTickets.length - 1].limitOfTrainings;
  const remainderSeasonTicket = user.seasonTickets.remainderOfTrainings;
  
  // const useTicketsOnTrainings = user.seasonTickets.useTicketsOnTrainings;
  // console.log(nameSeasonTicket)

  // Перевірка чи buySeasonTicket не є undefined
  // if (buySeasonTicket.length === 0) {
  //   return (
  //     <div>
  //       <Title>Абонемент</Title>
  //       <p>Відсутня інформація, зверніться до <Administation>адміністрації</Administation>!</p>
  //     </div>
  //   );
  // }

  const endSubscriptionDate = (inputDate) => {
    if (inputDate.length === 0) { 
      return null;
    }
    const dateArray = inputDate.split('T');
    const datePart = dateArray[0];
    const timePart = dateArray[1].split('.')[0]; // Відкидаємо мілісекунди тут

    const dateParts = datePart.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Місяці в JavaScript починаються з 0
    const day = parseInt(dateParts[2], 10);

    const timeParts = timePart.split(':');
    const hour = parseInt(timeParts[0], 10);
    const minute = parseInt(timeParts[1], 10);
    const second = parseInt(timeParts[2], 10);

    const currentDate = new Date(year, month, day, hour, minute, second);
    currentDate.setMonth(currentDate.getMonth() + 1);

    const newDay = currentDate.getDate();
    const newMonth = currentDate.getMonth() + 1;
    const newYear = currentDate.getFullYear();

    const result = `${newDay < 10 ? '0' : ''}${newDay}.${newMonth < 10 ? '0' : ''}${newMonth}.${newYear.toString().slice(-2)}`;
    return result;
  }
  
  const calculateDateDifference = (endDate) => {
    if (endDate === null) {
      return null;
    }
    const [endDateDay, endMonth, endYear] = endDate.split('.');
    const endDateObj = new Date(`20${endYear}`, endMonth - 1, endDateDay);
    const currentDateObj = new Date();
    const timeDifference = endDateObj - currentDateObj;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  const handleOpenCheck = (e) => {
    // e.preventDefault();
    setOpenCheckTrainings(true);
    setIsViewTrainings(e.data.info)
  };

  const calculateDateDifferencePercent = (endDate) => {
    if (endDate === null) return;
    const dayOfMonth = 31;
    const [endDay, endMonth, endYear] = endDate.split('.');
    const endDateObj = new Date(`20${endYear}`, endMonth - 1, endDay);
    const currentDateObj = new Date();
    const timeDifference = endDateObj - currentDateObj;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const percentageDifference = parseFloat(50 * (daysDifference / dayOfMonth * 100) / 100).toFixed(2);
    return percentageDifference;
  }

  const allVisitTrainingsSubscription = user.seasonTickets.allUnique
    ? Object.entries(user.seasonTickets.allUnique) : [];

  const dataVisitTrainingsSubscriptionGraphic = allVisitTrainingsSubscription.length > 0
    ? allVisitTrainingsSubscription.map(([id, value]) => ({
          id,
          label: id,
          value: value.length,
          info: value
      }))
    : [];

  const endDate = endSubscriptionDate(buySeasonTicket);
  // console.log(endDate);
  const difference = calculateDateDifference(endDate);
  // console.log(difference)
  const differencePercent = calculateDateDifferencePercent(endDate);

  const NonInformation = () => {
    return (
      <>
        <>
          <p>Відсутня інформація</p>
        </>
        <>
          <BuySubscription/>
        </>
      </>
    )
  }
  // console.log(dataVisitTrainingsSubscriptionGraphic)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Title>Поточний абонемент</Title>
      
      {nameSeasonTicket === 'Відсутні дані'
        ?
        <NonInformation />
        :
        <>
        {nameSeasonTicket === "Безлімітний"
          ?
          <p>"{nameSeasonTicket}"</p>
          :
          <p>"{nameSeasonTicket}"
            <span>&nbsp;({remainderSeasonTicket})</span>
          </p>}
        <div style={{ width: '50px', height: '50px', position: 'relative' }}>
          <BsSuitHeartFill size={50} fill='#817c7c' />
          <div style={{position: 'absolute', top: '50%', right: '50%', transform: 'translate(50%, -50%)', marginTop: '2px'}}>
            <BsSuitHeartFill size={differencePercent} fill='#e62239'  />
            <div style={{position: 'absolute', top: '50%', right: '50%', transform: 'translate(50%, -50%)'}}>
              <Title>{difference}</Title>
            </div>
          </div>
        </div>
        <div>
          <p>На які тренування використано</p>
          <div style={{width: '350px', height: '230px'}}>
            <VisitTrainingsGraphic
              data={dataVisitTrainingsSubscriptionGraphic}
              info={handleOpenCheck}
            />
          </div>
        </div>
        {openCheckTrainings ? <VisibleTrainings trainings={isViewTrainings} /> : ''}
    </>}
    </div>
  )
};

export default Subscription;

