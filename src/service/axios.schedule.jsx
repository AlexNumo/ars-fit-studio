import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from '../Redux/userSlice';
import {
  serverAPI,
  // tgSandra
} from './api';

export const OnGetAllSchedule = async () => {
  try {
    const result = await serverAPI.get(`/schedule`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnAddDataSchedule = async (dataSchedule, translateDay) => {
  const day = dataSchedule.day;
  const time = dataSchedule.time;
  const kindTraining = dataSchedule.kind_training;
  if (day === '' || day === '-') {
    return toast.error('Виберіть день тренування');
  }
  if (time === '' || time === '-') {
    return toast.error('Виберіть час тренування');
  }
  if (kindTraining === '') {
    return toast.error('Виберіть вид тренування');
  }
  try {
    // console.log(dataSchedule)
    const result = await serverAPI.post(`/schedule`, dataSchedule);
    const coach = result.data.coach;
    const kindTraining = result.data.kind_training;
    const day = translateDay(result.data.day);
    const time = result.data.time;
    
    toast.success(`Зміни внесено: 
    ${kindTraining} в 
    ${day} об 
    ${time} з 
    ${coach}`)
    console.log(result.data);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const scheduleAPI = {
  OnGetAllSchedule,
  OnAddDataSchedule,
};