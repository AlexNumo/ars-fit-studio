import schedule from '../../../assets/schedule.json';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  WrapperInfoSlider,
  WrapperRecord,
  Title,
  LovelyTrainingName,
  RecordBTN
} from './LoveTrainings.styled';
import {ModalView} from '../../ModalView/ModalView';

const LoveTrainings = () => {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [userID, setUserID] = useState();
  const [name_Coach, setName_Coach] = useState();
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [kind_training, setKind_training] = useState();

  const handleClose = () => { return setShow(false) };

  const favoriteTrainingsUser = (schedule, popular) => {
    const filterTrainings = schedule.filter((item) => item.kind_training !== '-' && item.kind_training === popular);
    const reformDayOfWeek = () => {
      const today = new Date().getDay();
      const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

      return dayOfWeek.reduce((result, day, index) => {
        const offset = (index - today + 7) % 7;
        result[offset] = day;
        return result;
      }, {});
    };

    const sortingTraining = {
      firstDay: filterTrainings.filter((item) => item.day === reformDayOfWeek()[0]),
      secondDay: filterTrainings.filter((item) => item.day === reformDayOfWeek()[1]),
    };
    // console.log(sortingTraining);
    return sortingTraining;
  };

  const todayTrainings = favoriteTrainingsUser(schedule, user.trainings.popular).firstDay;
  const tomorrowTrainings = favoriteTrainingsUser(schedule, user.trainings.popular).secondDay;
  // console.log(todayTrainings)

  const NonLoveTraining = () => {
    return (
      <>
        <p>У Вас поки відсутнє улюблене тренування</p>
      </>
    )
  }

  const NonTrainings = () => {
    return (
      <div style={{width: '100px'}}>
        <p>На жаль відсутні тренування найближчим часом</p>
      </div>
    )
  }

  const handleRecordTraining = (userID, name_Coach, time, day, kind_training) => {
    // const currentDate = new Date();
    // const timeZone = 'Europe/Kiev';
    // const localTime = new Intl.DateTimeFormat('en-US', { timeZone }).format(currentDate);
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const timeRecord = localTime + hours + minutes;

    if (kind_training === '-') {
      return null;
    }

    console.log(userID, name_Coach, time, day, kind_training)
    setUserID(userID);
    setName_Coach(name_Coach);
    setTime(time);
    setDay(day);
    setKind_training(kind_training);
    setShow(true)
  }
  // console.log(user.trainings.visit.length)
  return (
    <WrapperInfoSlider>
      <Title>Запис на улюблене тренування 
        {user.trainings.visit.length === 0 || user.trainings.visit.length === undefined
          ?
          ""
          :
          <LovelyTrainingName> {user.trainings.popular}</LovelyTrainingName>}
      </Title>
        <p style={{ fontSize: '12px', fontWeight: '400'}}>(формується автоматично на основі найчастіше відвідуваних занять)</p>
      {show && <ModalView 
        handleClose={handleClose}
        show={show}
        userID={userID}
        name_Coach={name_Coach}
        time={time}
        day={day}
        kind_training={kind_training}
      />}
      {user.trainings.visit?.length === 0 || user.trainings.visit.length === undefined ? <NonLoveTraining />
        :
        <WrapperRecord>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p>Сьогодні</p>
            {todayTrainings.length > 0 ? todayTrainings.map((item, index) => (
              <RecordBTN
                onClick={() => handleRecordTraining(user.id, item.name_Coach, item.time, item.day, item.kind_training)}
                key={index}
              >
                {item.kind_training}&nbsp;
                {item.time}
              </RecordBTN>
            )) : <NonTrainings />}
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p>Завтра</p>
            {tomorrowTrainings.length > 0 ? tomorrowTrainings.map((item, index) => (
              <RecordBTN
                onClick={() => handleRecordTraining(user.id, item.name_Coach, item.time, item.day, item.kind_training)}
                key={index}
              >
                {item.kind_training}&nbsp;
                {item.time}
              </RecordBTN>
            )) : <NonTrainings />}
          </div>
        </WrapperRecord>
      }
    </WrapperInfoSlider>
  )
};

export default LoveTrainings;