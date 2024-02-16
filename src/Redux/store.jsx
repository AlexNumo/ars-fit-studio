import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Ваш кореневий reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;