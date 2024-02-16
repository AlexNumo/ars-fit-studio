import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  WrapperCoachInfo,
} from './ScheduleAdmin.styled';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { clientAPI } from "../../../service/axios.users";
import { ModalViewCoachSalary } from '../../ModalView/ModalView';

const ScheduleAdmin = () => {

  const [dataCoach, setDataCoach] = useState({});
  const [dateRanges, setDateRanges] = useState({});
  const [selectedCoach, setSelectedCoach] = useState('');
  const [open, setOpen] = useState(false);
  const [dataCoachTrainings, setDataCoachTrainings] = useState(false);

  const getDataCoach = async () => {
    return await clientAPI.OnGetCoaches();
  }

  useEffect(() => {
    getDataCoach().then(result => setDataCoach(result));
  }, []);

  const handleStartDateChange = (date, labelAuth) => {
    setDateRanges(prevState => ({
      ...prevState,
      [labelAuth]: { ...prevState[labelAuth], startDate: date }
    }));
  };

  const handleEndDateChange = (date, labelAuth) => {
    setDateRanges(prevState => ({
      ...prevState,
      [labelAuth]: { ...prevState[labelAuth], endDate: date }
    }));
  };

  const handleViewTrainingsPay = async (coachInfo) => {
    setSelectedCoach(coachInfo);
    const selectedDates = dateRanges[coachInfo];
    const sendData = { date: selectedDates, coach: { labelAuth: coachInfo } };
    const getCoachesSalary = await clientAPI.OnGetCoachSalary(sendData);
    if (getCoachesSalary) {
      setOpen(true);
      setDataCoachTrainings(getCoachesSalary);
    }
    return getCoachesSalary;
  }

  const handleCloseModal = () => {
    return setOpen(false);
  }
  // console.log(dataCoach)
  return (
    <div>
      <h3>Тренери</h3>
      {dataCoach.length > 0 && dataCoach.map((item, index) => (
        <WrapperCoachInfo key={index}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            {item.instagram === '-' ?
              <p>{item.name} {item.surname === '-' ? '' : item.surname}</p> :
              <a href={`https://www.instagram.com/${item.instagram}`} target="_blank" rel="noopener noreferrer">
                {item.name} {item.surname === '-' ? '' : item.surname}
              </a>}
            <a href={`tel:${item.tel}`}>
              <BsFillTelephoneFill style={{ fill: '#544949' }} size={11} />
            </a>
          </div>
          <p>Унікальний ідентифікатор: {item.labelAuth}</p>
          <p>Доступ: {item.type}</p>
          <p>Здійснити розрахунок тренера за період:</p>
          <DatePicker
            selected={dateRanges[item.labelAuth]?.startDate}
            onChange={date => handleStartDateChange(date, item.labelAuth)}
            selectsStart
            startDate={dateRanges[item.labelAuth]?.startDate}
            endDate={dateRanges[item.labelAuth]?.endDate}
            placeholderText="Початок"
          />
          <DatePicker
            selected={dateRanges[item.labelAuth]?.endDate}
            onChange={date => handleEndDateChange(date, item.labelAuth)}
            selectsEnd
            startDate={dateRanges[item.labelAuth]?.startDate}
            endDate={dateRanges[item.labelAuth]?.endDate}
            minDate={dateRanges[item.labelAuth]?.startDate}
            placeholderText="Кінець"
          />
          <button onClick={() => handleViewTrainingsPay(item.labelAuth)}>Вибрати</button>
        </WrapperCoachInfo>
      ))}
      {open ?
        <>
          <ModalViewCoachSalary
            dateRanges={dateRanges}
            selectedCoach={selectedCoach}
            dataCoachTrainings={dataCoachTrainings}
            handleCloseModal={handleCloseModal}
          />
        </>
        :
        ''}
    </div>
  );
};

export default ScheduleAdmin;
