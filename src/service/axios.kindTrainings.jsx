import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from '../Redux/userSlice';
import {
  serverAPI,
  // tgSandra
} from './api';

export const OnGetKindTrainings = async () => {
  try {
    const result = await serverAPI.get(`/kindTrainings`);
    // console.log(result);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnAddKindTrainings = async (kind) => {
  // console.log(kind);
  try {
    const result = await serverAPI.post(`/kindTrainings`, kind);
    // console.log(result);
    const nameTraining = result.data.label;
    toast.success(`${nameTraining} додано`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnDeleteKindTrainings = async (dataSchedule) => {
  try {
    const result = await serverAPI.post(`/kindTrainings`, dataSchedule);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const kindTrainingsAPI = {
  OnGetKindTrainings,
  OnAddKindTrainings,
  OnDeleteKindTrainings
};