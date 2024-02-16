import React, { useEffect, useState } from "react";
import { scheduleAPI } from "../../../service/axios.schedule";
import { kindTrainingsAPI } from "../../../service/axios.kindTrainings";
import { clientAPI } from "../../../service/axios.users";
import {
  ModalViewAddSchedule,
  ModalViewAddKindTraining
} from '../../ModalView/ModalView';
import {
  SelectTrainings,
  ChangeButton,
  WrapperListSchedule,
} from './TrainingView.styled';

const TrainingView = () => {
  const days = {
    day1: 'monday',
    day2: 'tuesday',
    day3: 'wednesday',
    day4: 'thursday',
    day5: 'friday',
    day6: 'saturday',
    day7: 'sunday',
  };

  const [scheduleData, setScheduleData] = useState([]);
  const [scheduleByDay, setScheduleByDay] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  const [kindTrainingData, setKindTrainingData] = useState({});
  const [isOpenAddKindTraining, setIsOpenAddKindTraining] = useState(false);
  const [isOpenChangeSchedule, setIsOpenChangeSchedule] = useState(false);
  const [dataCoach, setDataCoach] = useState({});
  const [selectDayData, setSelectDayData] = useState('');
  const [selectDay, setSelectDay] = useState('');
  

  const translateDay = (day) => {
    switch (day.toLowerCase()) {
      case 'monday':
        return 'понеділок';
      case 'tuesday':
        return 'вівторок';
      case 'wednesday':
        return 'середа';
      case 'thursday':
        return 'четвер';
      case 'friday':
        return 'п’ятниця';
      case 'saturday':
        return 'субота';
      case 'sunday':
        return 'неділя';
      default:
        return day;
    }
  };

  const time = {};
  for (let i = 8; i <= 20; i++) {
    const hour = (i < 10 ? '0' : '') + i;
    time[i] = hour + ':00';
  }

  const getDataSchedule = async () => {
    return await scheduleAPI.OnGetAllSchedule();
  };

  const getDataCoach = async () => {
    return await clientAPI.OnGetCoaches();
  };

  const getDataKindTrainings = async () => {
    return await kindTrainingsAPI.OnGetKindTrainings();
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataSchedule();
      setScheduleData(Array.isArray(result) ? result : []);
    };
    fetchData();
  }, []);

  useEffect(() => {
    getDataCoach().then(result => setDataCoach(result));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataKindTrainings();
      setKindTrainingData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredSchedule = {};
    for (const dayKey in days) {
      const day = days[dayKey];
      filteredSchedule[day] = scheduleData
        .filter(item => item.day === day)
        .sort((a, b) => {
          const timeA = parseInt(a.time.split(":")[0]); // розбиваємо час на години та хвилини
          const timeB = parseInt(b.time.split(":")[0]);
          return timeA - timeB; // відсортовуємо за годинами
        });
    }
    setScheduleByDay(filteredSchedule);
  }, [scheduleData]);

  const openChangeSchedule = () => {
    // e.preventDefault();
    setIsOpenChangeSchedule(!isOpenChangeSchedule);
  };

  const openAddKindTraining = () => {
    // e.preventDefault();
    setIsOpenAddKindTraining(!isOpenAddKindTraining);
  };

  useEffect(() => {
    setSelectDayData(scheduleByDay[selectDay]);
  }, [selectDay, scheduleByDay])

  console.log(selectDayData);

  return (
    <>
      <h3>Розклад</h3>
      <div>
        <ChangeButton onClick={() => openChangeSchedule()}>Змінити рокзлад</ChangeButton>
        <ChangeButton onClick={() => openAddKindTraining()}>Додати новий вид тренування</ChangeButton>
      </div>
      <SelectTrainings
        value={selectDay}
        onChange={(e) => setSelectDay(e.target.value)}
      >
        <option style={{ backgroundColor: '#d6aaaa' }} value="-">Обери день</option>
        {Object.values(days).map((item, index) => (
          <option
            key={index}
            value={item}
            style={{ backgroundColor: '#d6aaaa', overflow: 'auto' }}
          >
            {translateDay(item)}
          </option>
        ))}
      </SelectTrainings>
      {selectDayData ? 
        selectDayData.map((item, index) => (
          <WrapperListSchedule key={index}>
            <p>{item.time}</p>
            <p>{item.kind_training}</p>
            <p>{item.coach === '' ? '' :item.coach}</p>
          </WrapperListSchedule>
      )) : ''}
      {isOpenChangeSchedule ?
        <ModalViewAddSchedule
          openChangeSchedule={openChangeSchedule}
          dataCoach={dataCoach}
          time={time}
          kindTrainingData={kindTrainingData}
        /> : ''}
      {isOpenAddKindTraining ?
        <ModalViewAddKindTraining
          openAddKindTraining={openAddKindTraining}
        /> : ''}
    </>
  );
};

export default TrainingView;
