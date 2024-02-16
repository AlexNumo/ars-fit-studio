import React from 'react';
import { useSelector } from 'react-redux';
import {
  WrapperInfoSlider,
  RecordBTN,
  Title
} from './Schedule.styled';
import schedule from '../../../assets/schedule.json';
import { useState } from 'react';
import {ModalView} from '../../ModalView/ModalView';

const Schedule = () => {
  const user = useSelector((state) => state.user);
  const [userID, setUserID] = useState();
  const [name_Coach, setName_Coach] = useState();
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [kind_trainee, setKind_trainee] = useState();
  const [show, setShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const handleClose = () => { return setShow(false) };

  const reformSchedule = (schedule) => {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const timeOfDay = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

    const todayIndex = dayOfWeek.indexOf(today.toLowerCase());
    const sortedTraining = {};

    for (let i = 0; i < dayOfWeek.length; i++) {
        const dayIndex = (i + todayIndex) % 7;
        const currentDay = dayOfWeek[dayIndex];
        const dayTrainings = {};

        timeOfDay.forEach((time) => {
            const trainings = schedule.filter((item) => item.day === currentDay && item.time === time);
            if (trainings.length > 0) {
                dayTrainings[time] = trainings;
            }
        });

        sortedTraining[currentDay] = dayTrainings;
    }

    const threeDays = {};
    const dayIndex = dayOfWeek.indexOf(today.toLowerCase());

    for (let i = 0; i < 3; i++) {
        const currentDayIndex = (dayIndex + i) % 7;
        const currentDay = dayOfWeek[currentDayIndex];
        threeDays[`Day${i + 1}`] = sortedTraining[currentDay];
    }

    return threeDays;
  };

  const reformedSchedule = reformSchedule(schedule);
  const scheduleToday = reformedSchedule.Day1;
  const scheduleTomorrow = reformedSchedule.Day2;
  const scheduleDayAfterTomorrow = reformedSchedule.Day3;

  const handleRecordTraining = (userID, name_Coach, time, day, kind_trainee, dayInfo) => {
    if (kind_trainee === '-') {
      return null;
    }
    setUserID(userID);
    setName_Coach(name_Coach);
    setTime(time);
    setDay(day);
    setKind_trainee(kind_trainee);
    setShow(true);
    setSelectedDay(dayInfo);
  }
  
  return (
    <div>
      <Title>Записатися на:</Title>
      <WrapperInfoSlider>
        {show && <ModalView 
          handleClose={handleClose}
          show={show}
          userID={userID}
          name_Coach={name_Coach}
          time={time}
          day={day}
          kind_trainee={kind_trainee}
          selectedDay={selectedDay}
        />}
        <div>
          <p>Сьогодні</p>
          {Object.keys(scheduleToday).map((time) => (
            <div key={time}>
              {scheduleToday[time] && scheduleToday[time].map((item, index) => (
                <RecordBTN
                  onClick={() => handleRecordTraining(user.id, item.name_Coach, item.time, item.day, item.kind_trainee, 'today')}
                  key={index}>
                  {item.kind_trainee !== '-' ? `${item.kind_trainee} ${item.time}` : item.kind_trainee}
                </RecordBTN>
              ))}
            </div>
          ))}

        </div>
        <div>
          <p>Завтра</p>
          {Object.keys(scheduleTomorrow).map((time) => (
            <div key={time}>
              {scheduleTomorrow[time].map((item, index) => (
                <RecordBTN
                  onClick={() => handleRecordTraining(user.id, item.name_Coach, item.time, item.day, item.kind_trainee, 'tomorrow')}
                  key={index}>
                  {item.kind_trainee !== '-' ? `${item.kind_trainee} ${item.time}` : item.kind_trainee}
                </RecordBTN>
              ))}
            </div>
          ))}
        </div>
        <div>
          <p>Післязавтра</p>
          {Object.keys(scheduleDayAfterTomorrow).map((time) => (
            <div key={time}>
              {scheduleDayAfterTomorrow[time].map((item, index) => (
                <RecordBTN
                  onClick={() => handleRecordTraining(user.id, item.name_Coach, item.time, item.day, item.kind_trainee, 'aftertomorrow')}
                  key={index}>
                  {item.kind_trainee !== '-' ? `${item.kind_trainee} ${item.time}` : item.kind_trainee}
                </RecordBTN>
              ))}
            </div>
          ))}
        </div>
      </WrapperInfoSlider>
    </div>
  );
};

export default Schedule;
