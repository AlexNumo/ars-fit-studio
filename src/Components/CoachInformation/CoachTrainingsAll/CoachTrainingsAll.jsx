import { useState } from "react";
import {
  StyledDatePicker,
  ChooseBTN,
  WrapperCoachTrainings
} from './CoachTrainingsAll.styled';
import { useSelector } from 'react-redux';
import { clientAPI } from "../../../service/axios.users";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CoachTrainingsAll = () => {
  const [dateRanges, setDateRanges] = useState({});
  const [dataCoachTrainings, setDataCoachTrainings] = useState({});
  const [showUsers, setShowUsers] = useState(false); 
  const [selectedTrainingIndex, setSelectedTrainingIndex] = useState(''); 
  const user = useSelector((state) => state.user);


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

  const handleViewTrainings = async (coachInfo) => {
    // setSelectedCoach(coachInfo);
    const selectedDates = dateRanges[coachInfo];
    const sendData = { date: selectedDates, coach: { labelAuth: coachInfo } };
    const getTraining = await clientAPI.OnGetCoachTrainingsPeriod(sendData);
    if (getTraining) {
      setDataCoachTrainings(getTraining);
    }
    // console.log(sendData);
    return getTraining;
  };

  const countTrainingsUsers = (value, status) => {
    if (!value || !value.users || !Array.isArray(value.users)) {
      return 0;
    }
    const usersCount = value.users.reduce((acc, user) => {
      if ((status === 'cancel' && user.trainingCanceled === true) || 
          (status === 'visit' && user.trainingVisit === true)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return usersCount;
  };

  const handleShowUsers = (e, index) => {
    e.preventDefault();
    setSelectedTrainingIndex(index)
    setShowUsers(!showUsers);
  };

  // const DateOf = (date) => {
  //   const selectedDates = date[user.labelAuth];
  //   const startDate = new Date(selectedDates.startDate).toLocaleDateString('uk-UA');
  //   const endDate = new Date(selectedDates.endDate).toLocaleDateString('uk-UA');
  //   return (
  //     <p>Інформація за період з {startDate} по {endDate}</p>
  //   )
  // }


  // console.log("dataCoachTrainings: ", dataCoachTrainings)

  return (
    <>
      <h3>Перегляд всіх тренувань</h3>
      <div>
        <p>Оберіть період</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StyledDatePicker
            selected={dateRanges[user.labelAuth]?.startDate}
            onChange={date => handleStartDateChange(date, user.labelAuth)}
            selectsStart
            startDate={dateRanges[user.labelAuth]?.startDate}
            endDate={dateRanges[user.labelAuth]?.endDate}
            placeholderText="Початок"
          />
          <StyledDatePicker
            selected={dateRanges[user.labelAuth]?.endDate}
            onChange={date => handleEndDateChange(date, user.labelAuth)}
            selectsEnd
            startDate={dateRanges[user.labelAuth]?.startDate}
            endDate={dateRanges[user.labelAuth]?.endDate}
            minDate={dateRanges[user.labelAuth]?.startDate}
            placeholderText="Кінець"
          />
          <ChooseBTN onClick={() => handleViewTrainings(user.labelAuth)}>Вибрати</ChooseBTN>
          <div style={{overflow: 'auto', height: '410px'}}>
            {/* {dateRanges.length > 0 ? DateOf(dateRanges) : ''} */}
            {Object.entries(dataCoachTrainings).map(([key, value], index) => (
              <WrapperCoachTrainings key={key}>
                <p>Дата: {new Date(value.training.date).toLocaleDateString('uk-UA')}</p>
                <p>Вид тренування: {value.training.kind_training}</p>
                <p>Час: {value.training.time}</p>
                {/* <p>{value.training.users}</p> */}
                <p>
                  Кількість клієнтів: {value.users.length}
                  &nbsp;(<span className={countTrainingsUsers(value, 'cancel') > 0 ? "canceledTrainings" : ""}>
                    {countTrainingsUsers(value, 'cancel')}
                  </span>)
                  &nbsp;(<span className={countTrainingsUsers(value, 'visit') > 0 ? "visitedTrainings" : ""}>
                    {countTrainingsUsers(value, 'visit')}
                  </span>)
                </p>
                {showUsers && selectedTrainingIndex === index ?
                  <FaAngleUp onClick={(e) => handleShowUsers(e, index)} /> :
                  <FaAngleDown onClick={(e) => handleShowUsers(e, index)} />}
                {showUsers && selectedTrainingIndex === index &&
                  value.users.map((item, index) => (
                    <div key={index}>
                      <p className=
                        {item.trainingCanceled === true ? "canceledTrainings" : ""
                          ||
                          item.trainingVisit === true ? "visitedTrainings" : ""}>
                        {item.name} {item.surname}</p>
                    </div>
                  ))
                }
              </WrapperCoachTrainings>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default CoachTrainingsAll;