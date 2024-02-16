import {
  formatDate,
  filterVisitTrainings,
  filterNonVisitTrainings,
  filterMostPopularTrainings,
  countUniqueTrainings,
  countUniqueTrainingsSubscription
} from '../Components/UserInformation/Filtered/Filtered.jsx';
import { createSlice } from '@reduxjs/toolkit';
import Emblem from '../assets/picture/Emblem.jpg';

const initialStateforUpdatedUser = {
  id: 0,
  access: 'client',
  name: 'Відсутні дані',
  surname: 'Відсутні дані',
  dayOfBirthday: 'Відсутні дані',
  photo: Emblem,
  tel: 'Відсутні дані',
  instagram: 'Відсутні дані',
  telegramBot: {
    number: 0,
    isTrainingReminderSent: false
  },
  trainings: {
    visit: 0,
    nonVisit: 0,
    all: 0,
    popular: 0,
    allUnique: {},
  },
  seasonTickets: {
    name: 0,
    limit: 0,
    remainder: 0,
    date: 0,
    useTicketsOnTrainings: 0,
    allUnique: {},
  },
  version: 1.0,
};

const forUpdatedUserReducer = createSlice({
  name: 'forUpdatedUser',
  initialState: initialStateforUpdatedUser,
  reducers: {
    setForUpdatedUser: (state, action) => {
      const updatedUser = action.payload;
      state.name = updatedUser ? updatedUser.info?.[0]?.name?.trim() || updatedUser.name : 'Відсутні дані';
      state.surname = updatedUser?.surname?.length > 0 ? updatedUser.surname : '-';
      state.tel = updatedUser?.id || updatedUser.tel|| 'Відсутні дані';
      state.instagram = updatedUser?.instaNickName || updatedUser.info?.[updatedUser.info.length - 1]?.instaNickName || updatedUser.instagram;
      state.telegramBot.number = updatedUser?.infoTG?.[0]?.phoneNumber.length > 0 ? updatedUser.infoTG[0].phoneNumber : (updatedUser?.telegramBot?.number || 'Відсутні дані');
      state.telegramBot.isTrainingReminderSent = updatedUser?.infoTG?.length ? true : false;
      state.trainings.visit = updatedUser ? (updatedUser?.trainings?.visit || filterVisitTrainings(updatedUser.info)) : 0;
      state.trainings.nonVisit = updatedUser ? (updatedUser?.trainings?.nonVisit || filterNonVisitTrainings(updatedUser.info)) : 0;
      state.trainings.all = updatedUser ? (updatedUser?.trainings?.all || updatedUser.info) : 0;
      state.trainings.allUnique = updatedUser ? (updatedUser?.trainings?.allUnique || countUniqueTrainings(updatedUser.info)) : 0;
      state.trainings.popular = updatedUser ? (updatedUser?.trainings?.popular || filterMostPopularTrainings(updatedUser.info)) : 0;
      state.seasonTickets.name = updatedUser && updatedUser.seasonTickets?.length > 0 ? updatedUser.seasonTickets[updatedUser.seasonTickets.length - 1]?.label || state.seasonTickets.name : 0;
      state.seasonTickets.limit = updatedUser && updatedUser.seasonTickets?.length > 0 ? updatedUser.seasonTickets[updatedUser.seasonTickets.length - 1]?.limitOfTrainnings || state.seasonTickets.limit : 0;
      state.seasonTickets.remainder = updatedUser && updatedUser.seasonTickets?.length > 0 ? updatedUser.seasonTickets[updatedUser.seasonTickets.length - 1]?.remainderOfTrainnings || state.seasonTickets.remainder : 0;
      state.seasonTickets.date = updatedUser && updatedUser.seasonTickets?.length > 0 ? formatDate(updatedUser.seasonTickets[updatedUser.seasonTickets.length - 1]?.dateOfBuying) || state.seasonTickets.date : 0;
      state.seasonTickets.useTicketsOnTrainings = updatedUser && updatedUser.seasonTickets?.length > 0 ? updatedUser.seasonTickets[updatedUser.seasonTickets.length - 1]?.infoTrainings || state.seasonTickets.useTicketsOnTrainings : 0;
      state.seasonTickets.allUnique = updatedUser ? (updatedUser?.seasonTickets || countUniqueTrainingsSubscription(updatedUser.seasonTickets[updatedUser.seasonTickets.length - 1].infoTrainings)) || state.seasonTickets.allUnique : 0;
      state.version = updatedUser?.version ? 2.0 : 1.0;
    },
  },
});



export const { setForUpdatedUserReducer } = forUpdatedUserReducer.actions;

export default forUpdatedUserReducer.reducer;
