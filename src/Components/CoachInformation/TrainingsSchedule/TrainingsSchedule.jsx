import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { clientAPI } from '../../../service/axios.users';
import { FcCheckmark } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import {
  WrapperInfoSlider,
  Title,
  WrapperInformation,
  WrapperRecords,
  NameTraining,
  WrapperUsersName
} from './TrainingsSchedule.styled';


const TrainingsSchedule = () => {
  const user = useSelector((state) => state.user);
  const labelAuth = useSelector((state) => state.user.labelAuth);
  const [dataTrainings, setDataTrainings] = useState('');
  const [dataTrainingsToday, setDataTrainingsToday] = useState([]);
  const [dataTrainingsTomorrow, setDataTrainingsTomorrow] = useState([]);
  const [visitTrainingMap, setVisitTrainingMap] = useState({});
  const [cancelVisitTrainingMap, setCancelVisitTrainingMap] = useState({});
  const linkInstagram = 'https://www.instagram.com/';
  // const [trainingsToday, setTrainingsToday] = useState([]);
  // const [trainingsTomorrow, setTrainingsTomorrow] = useState([]);
  // const [allNameUsers, setAllNameUsers] = useState([]);

  const getTrainingsCoach = async (labelAuth) => {
    const date = new Date();
    // console.log(date)
    return await clientAPI.OnGetCoachTrainings(labelAuth, date)
  };
  
  useEffect(() => {
    getTrainingsCoach(labelAuth).then(result => setDataTrainings(result));
  }, [labelAuth]);

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowYear = tomorrow.getFullYear();
  const tomorrowMonth = ('0' + (tomorrow.getMonth() + 1)).slice(-2);
  const tomorrowDay = ('0' + tomorrow.getDate()).slice(-2);
  const tomorrowFormattedDate = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;

  useEffect(() => {
    if (dataTrainings) {
      const allTrainings = dataTrainings.flat();
      
      const filteredTrainingsToday = allTrainings.filter(training => training.date.slice(0, 10) === formattedDate);
      const filteredTrainingsTomorrow = allTrainings.filter(training => training.date.slice(0, 10) === tomorrowFormattedDate);
      const uniqueTimesToday = [...new Set(filteredTrainingsToday.map(training => training.time))];
      const uniqueTimesTomorrow = [...new Set(filteredTrainingsTomorrow.map(training => training.time))];

      const newDataArrayToday = uniqueTimesToday.map(time => {
          const trainingsForTime = filteredTrainingsToday.filter(training => training.time === time);
          const uniqueKindTrainingsForTime = [...new Set(trainingsForTime.map(training => training.kind_training))];
          return {
              time: time,
              users: trainingsForTime,
              kind_training: uniqueKindTrainingsForTime
          };
      });

      const newDataArrayTomorrow = uniqueTimesTomorrow.map(time => {
          const trainingsForTime = filteredTrainingsTomorrow.filter(training => training.time === time);
          const uniqueKindTrainingsForTime = [...new Set(trainingsForTime.map(training => training.kind_training))];
          return {
              time: time,
              users: trainingsForTime,
              kind_training: uniqueKindTrainingsForTime
          };
      });
      setDataTrainingsToday(newDataArrayToday);
      setDataTrainingsTomorrow(newDataArrayTomorrow);
      return;
    }
  }, [dataTrainings, formattedDate, tomorrowFormattedDate]);


  // console.log("dataTrainingsToday: ", dataTrainingsToday);

  const handleCheckVisit = async (e, trainingID, seasonTicketID, visit) => {
    e.preventDefault();
    const dataVisitTraining = {
      trainingID: trainingID,
      visit: visit,
      seasonTicketID: seasonTicketID ? seasonTicketID : 'one-time-class',
    }
    const sendVisitRequest = await clientAPI.OnSendVisitTraining(dataVisitTraining);
    if (sendVisitRequest === "Підтверджено тренування") {
      setCancelVisitTrainingMap(prevState => ({ ...prevState, [trainingID]: false }));
      setVisitTrainingMap(prevState => ({ ...prevState, [trainingID]: true }));
    }
    if (sendVisitRequest === "Скасовано тренування") {
      setCancelVisitTrainingMap(prevState => ({ ...prevState, [trainingID]: true }));
      setVisitTrainingMap(prevState => ({ ...prevState, [trainingID]: false }));
    }
    return sendVisitRequest;
  };

  // console.log("dataTrainings: ", dataTrainings);

  // console.log("cancelVisitTrainingMap: ", cancelVisitTrainingMap);

  return (
    <WrapperInfoSlider>
      <Title>Записи тренера {user.name} {user.surname === '-' ? '' : user.surname}</Title>
      <WrapperInformation>
      <div>
        <p>На сьогодні</p>
          {dataTrainingsToday.map((trainingInfo, index) => (
            <WrapperRecords key={index}>
              <p><NameTraining>{trainingInfo.kind_training[0]} <br />({trainingInfo.time})</NameTraining> </p>
              {trainingInfo.users.map((user) => (
                <WrapperUsersName
                  key={user.idTraining}
                  className={`
                    ${user.visitTraining || visitTrainingMap[user.idTraining] ? 'visited' : ''}
                    ${user.canceledTraining || cancelVisitTrainingMap[user.idTraining] ? 'canceled' : ''}`}
                >
                  <FcCheckmark
                    onClick={(e) => handleCheckVisit(e, user.idTraining, user.seasonTicketID, true)} />
                  {user.instagram === '-'
                    ?
                    <p>{user.name} {user.surname === '-' ? '' : user.surname}</p>
                    :
                    <a
                    href={linkInstagram + user.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.name} {user.surname === '-' ? '' : user.surname}
                  </a>  
                  }
                  <IoIosClose
                    onClick={(e) => handleCheckVisit(e, user.idTraining, user.seasonTicketID, false)}
                    color='red'
                  />
                </WrapperUsersName>
              ))}
            </WrapperRecords>
          ))}
      </div>
      <div>
        <p>На завтра</p>
        {dataTrainingsTomorrow.map((trainingInfo, index) => (
            <WrapperRecords key={index}>
              <p><NameTraining>{trainingInfo.kind_training[0]} <br />({trainingInfo.time})</NameTraining> </p>
              {trainingInfo.users.map((user, innerIndex) => (
                <WrapperUsersName
                  key={user.idTraining}
                  className={`
                    ${user.visitTraining || visitTrainingMap[user.idTraining] ? 'visited' : ''}
                    ${user.canceledTraining || cancelVisitTrainingMap[user.idTraining] ? 'canceled' : ''}`}
                >
                  <FcCheckmark
                    onClick={(e) => handleCheckVisit(e, user.idTraining, user.seasonTicketID, true)} />
                  {user.instagram === '-'
                    ?
                    <p>{user.name} {user.surname === '-' ? '' : user.surname}</p>
                    :
                    <a
                    href={linkInstagram + user.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.name} {user.surname === '-' ? '' : user.surname}
                  </a>  
                  }
                  <IoIosClose
                    onClick={(e) => handleCheckVisit(e, user.idTraining, user.seasonTicketID, false)}
                    color='red'
                  />
                </WrapperUsersName>
              ))}
            </WrapperRecords>
          ))}
      </div>
      </WrapperInformation>
    </WrapperInfoSlider>
  )
};

export default TrainingsSchedule;

