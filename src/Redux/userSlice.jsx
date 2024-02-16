import {
  filterVisitTrainings,
  filterNonVisitTrainings,
  filterMostPopularTrainings,
  countUniqueTrainings,
  countUniqueTrainingsSubscription
} from '../Components/UserInformation/Filtered/Filtered.jsx';
import { createSlice } from '@reduxjs/toolkit';
import Emblem from '../assets/picture/Emblem.jpg';

const initialState = {
  id: 0,
  access: 'client',
  name: 'Відсутні дані',
  labelAuth: '-',
  surname: 'Відсутні дані',
  birthday: 'Відсутні дані',
  password: '',
  verify: false,
  photo: Emblem,
  tel: 'Відсутні дані',
  instagram: '@',
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
    limitOfTrainings: 0,
    remainderOfTrainings: 0,
    price: 0,
    kind: 0,
    includes: 0,
    dateOfBuying: 0,
    dateChoose: 0,
    confirmation: false,
    infoTrainings:[],
    useTicketsOnTrainings: 0,
    allUnique: {},
  },
  version: 2.0,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.id = user?._id || user?.id;
      state.access = user?.access || 'client';
      state.labelAuth = user?.labelAuth || '-';
      state.name = user?.name?.trim() || 'Відсутні дані';
      state.surname = user?.surname || 'Відсутні дані';
      state.birthday = user?.birthday || 'Відсутні дані';
      state.password = user?.password || '1111';
      state.verify = user?.verify || false;
      state.photo = user?.photo === 'Відсутні дані' ? Emblem : user?.photo;
      state.tel = user?.tel || 'Відсутні дані';
      state.instagram = user?.instagram || '@';
      state.updateUser = user?.updateUser || false;

      // state.seasonTickets = user?.seasonTickets || 'Відсутні дані'; 
      // state.seasonTickets.id = user?.seasonTickets[user.seasonTickets.length - 1].id || 'Відсутні дані';
      state.seasonTickets.name = user?.seasonTickets[user.seasonTickets.length - 1]?.name || 'Відсутні дані';
      state.seasonTickets.limitOfTrainings = user?.seasonTickets[user.seasonTickets.length - 1]?.limitOfTrainings || 'Відсутні дані';
      state.seasonTickets.remainderOfTrainings = user?.seasonTickets[user.seasonTickets.length - 1]?.remainderOfTrainings;
      state.seasonTickets.price = user?.seasonTickets[user.seasonTickets.length - 1]?.price || 'Відсутні дані';
      state.seasonTickets.kind = user?.seasonTickets[user.seasonTickets.length - 1]?.kind || 'Відсутні дані';
      state.seasonTickets.includes = user?.seasonTickets[user.seasonTickets.length - 1]?.includes || 'Відсутні дані';

      // state.seasonTickets.includes = user?.seasonTickets[user.seasonTickets.length - 1].includes || 'Відсутні дані';
      // // if (user?.seasonTickets?.includes !== undefined) {
      // //   state.seasonTickets.includes = null;
      // // }

      state.seasonTickets.dateOfBuying = user?.seasonTickets[user.seasonTickets.length - 1]?.dateOfBuying || '';
      state.seasonTickets.dateChoose = user?.seasonTickets[user.seasonTickets.length - 1]?.dateChoose || 'Відсутні дані';
      state.seasonTickets.confirmation = user?.seasonTickets[user.seasonTickets.length - 1]?.confirmation || false;
      state.seasonTickets.infoTrainings = user?.seasonTickets[user.seasonTickets.length - 1]?.infoTrainings || 'Відсутні дані';
      state.seasonTickets.useTicketsOnTrainings = user?.seasonTickets[user.seasonTickets.length - 1]?.infoTrainings || 'Відсутні дані';
      state.seasonTickets.allUnique = user?.seasonTickets[user.seasonTickets.length - 1]?.infoTrainings ? countUniqueTrainingsSubscription(user.seasonTickets[user.seasonTickets.length - 1].infoTrainings) : 'Відсутні дані';
      state.telegramBot.phoneNumber = user?.telegramBot?.phoneNumber || 'Відсутні дані';
      state.telegramBot.isTrainingReminderSent = user?.telegramBot?.phoneNumber?.length > 0 ? true : false;
      
      state.trainings.visit = filterVisitTrainings(user.trainings) || 0;

      // state.seasonTickets.allUnique = countUniqueTrainingsSubscription(state.trainings.visit) || 'Відсутні дані';
      
      state.trainings.nonVisit = user?.trainings?.length ? filterNonVisitTrainings(user.trainings) : 0;
      state.trainings.all = user?.trainings || 0;
      state.trainings.allUnique = countUniqueTrainings(user.trainings) || 0;
      state.trainings.popular = filterMostPopularTrainings(user.trainings) || 0;
      state.version = user?.updateUser || 1.0;
      state.isAuthenticated = user ? true : false;
    },
  },
});



export const { setUser } = userSlice.actions;

export default userSlice.reducer;
