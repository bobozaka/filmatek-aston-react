import { combineReducers } from 'redux';
import searchResultsSlice from './slices/searchResultsSlice';
import userSlice from './slices/userSlice';
import filmsSlice from './slices/filmsSlice';

const rootReducer = combineReducers({
  searchResults: searchResultsSlice,
  user: userSlice,
  films: filmsSlice,
});

export default rootReducer;
