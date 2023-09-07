import { createSlice } from '@reduxjs/toolkit';

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: [],
  reducers: {
    setSearchResults: (state, action) => action.payload,
    clearSearchResults: () => [],
  },
});
export const { setSearchResults, clearSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
