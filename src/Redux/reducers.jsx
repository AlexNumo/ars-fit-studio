import { combineReducers } from 'redux';
import userReducer from './userSlice';
import forUpdatedUserReducer from './forUpdatedUserSlice';
import seasonTicketsReducer from './seasonTicketsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  seasonTickets: seasonTicketsReducer,
  forUpdatedUser: forUpdatedUserReducer,
  // Додайте інші reducers тут
});

export default rootReducer;

      