import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seasonTickets: {}
};

const seasonTicketsSlice = createSlice({
  name: 'seasonTickets',
  initialState,
  reducers: {
    setSeasonTickets: (state, action) => {
      const seasonTickets = action.payload;
      state.seasonTickets = seasonTickets;
    },
  },
});



export const { setSeasonTickets } = seasonTicketsSlice.actions;

export default seasonTicketsSlice.reducer;
