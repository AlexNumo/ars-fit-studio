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

  const getTrainingsCoach = async (labelAuth) => {
    return await clientAPI.OnGetCoachTrainings(labelAuth)
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
      const allTrainings = dataTrainings.reduce((acc, item) => {
        return [...acc, ...item.trainings];
      }, []);

      const filteredTrainingsToday = allTrainings.filter(training => training.date.slice(0, 10) === formattedDate);
      const filteredTrainingsTomorrow = allTrainings.filter(training => training.date.slice(0, 10) === tomorrowFormattedDate);

      const uniqueTimesToday = [...new Set(filteredTrainingsToday.map(training => training.time))];
      const uniqueTimesTomorrow = [...new Set(filteredTrainingsTomorrow.map(training => training.time))];

      const uniqueKindTrainingsToday = [...new Set(filteredTrainingsToday.map(training => training.kind_training))];
      const uniqueKindTrainingsTomorrow = [...new Set(filteredTrainingsTomorrow.map(training => training.kind_training))];

      const newDataToday = uniqueTimesToday.flatMap(time => {
        return uniqueKindTrainingsToday.map(kind_training => {
          const usersInformation = {};
          filteredTrainingsToday.forEach(training => {
            if (training.time === time && training.kind_training === kind_training) {
              const foundDataTraining = dataTrainings.find(items => items.trainings.find(item => item._id === training._id));
              if (foundDataTraining) {
                usersInformation[training._id] = {
                  name: foundDataTraining.name,
                  surname: foundDataTraining.surname,
                  instagram: foundDataTraining.instagram,
                  trainingID: training._id,
                  time: time,
                  kind_training: kind_training,
                  seasonTicketID: training.seasonTicketsID,
                  visitTraining: training.visitTraining,
                  canceledTraining: training.canceledTraining,
                };
              }
            }
          });
          return {
            usersInformation
          };
        });
      });

      const newDataTomorrow = uniqueTimesTomorrow.flatMap(time => {
        return uniqueKindTrainingsTomorrow.map(kind_training => {
          const usersInformation = {};
          filteredTrainingsTomorrow.forEach(training => {
            if (training.time === time && training.kind_training === kind_training) {
              const foundDataTraining = dataTrainings.find(items => items.trainings.find(item => item._id === training._id));
              if (foundDataTraining) {
                usersInformation[training._id] = {
                  name: foundDataTraining.name,
                  surname: foundDataTraining.surname,
                  instagram: foundDataTraining.instagram,
                  trainingID: training._id,
                  time: time,
                  kind_training: kind_training,
                  seasonTicketID: training.seasonTicketsID,
                  visitTraining: training.visitTraining,
                  canceledTraining: training.canceledTraining,
                };
              }
            }
          });
          return {
            usersInformation
          };
        });
      });

      setDataTrainingsToday(newDataToday);
      setDataTrainingsTomorrow(newDataTomorrow);
    }
  }, [dataTrainings, formattedDate, tomorrowFormattedDate]);

  // console.log("dataTrainingsToday: ", dataTrainingsToday);

  const handleCheckVisit = async (e, trainingID, seasonTicketID, visit) => {
    e.preventDefault();
    const dataVisitTraining = {
      trainingID: trainingID,
      visit: visit,
      seasonTicketID: seasonTicketID,
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

  // console.log("visitTrainingMap: ", visitTrainingMap);

  // console.log("cancelVisitTrainingMap: ", cancelVisitTrainingMap);

  return (
    <WrapperInfoSlider>
      <Title>Записи тренера {user.name} {user.surname === '-' ? '' : user.surname}</Title>
      <WrapperInformation>
      <div>
        <p>На сьогодні</p>
        {Object.values(dataTrainingsToday).map((dayTrainings, outerIndex) => (
          <WrapperRecords key={outerIndex}>
            {Object.values(dayTrainings.usersInformation).map((userData, index) => (
              <div key={userData.trainingID}>
                {index === 0 && (
                  <p><NameTraining>{userData.kind_training} <br/>({userData.time})</NameTraining> </p>
                )}
                <WrapperUsersName
                  id={userData.trainingID}
                  className={`
                    ${userData.visitTraining || visitTrainingMap[userData.trainingID] ? 'visited' : ''} 
                    ${userData.canceledTraining || cancelVisitTrainingMap[userData.trainingID] ? 'canceled' : ''}`}
                >
                  <FcCheckmark
                    onClick={(e) => handleCheckVisit(e, userData.trainingID, userData.seasonTicketID, 'true')} />
                  <a
                    href={linkInstagram + userData.instagram}
                    target="_blank"
                    rel="noopener noreferrer">
                    {userData.name} {userData.surname === '-' ? '' : userData.surname}</a>
                  <IoIosClose
                    onClick={(e) => handleCheckVisit(e, userData.trainingID, userData.seasonTicketID, 'false')}
                    color='red'/>
                </WrapperUsersName>
              </div>
            ))}
          </WrapperRecords>
        ))}
      </div>
      <div>
        <p>На завтра</p>
        {Object.values(dataTrainingsTomorrow).map((dayTrainings, outerIndex) => (
          <WrapperRecords key={outerIndex}>
            {Object.values(dayTrainings.usersInformation).map((userData, innerIndex) => (
              <div key={innerIndex}>
                  {innerIndex === 0 && (
                    <p><NameTraining>{userData.kind_training} <br/>({userData.time})</NameTraining> </p>
                  )}
                  <p>{userData.name}</p>
              </div>
            ))}
          </WrapperRecords>
        ))}
      </div>
      </WrapperInformation>
    </WrapperInfoSlider>
  )
};

export default TrainingsSchedule;

