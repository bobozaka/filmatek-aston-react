/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    fetchFilmsRequest: (state) => {
      state.isLoading = true;
    },
    fetchFilmsSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    fetchFilmsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchFilmsRequest, fetchFilmsSuccess, fetchFilmsFailure } = filmsSlice.actions;

export default filmsSlice.reducer;
