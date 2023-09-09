import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../utils';
import {
  setSearchResults,
  clearSearchResults,
} from '../../redux/reducers/slices/searchResultsSlice';
import { saveSearchHistory } from '../../firebaseUtils';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMoviesHandler = async (newQuery) => {
    try {
      const results = await searchMovies(newQuery);
      dispatch(setSearchResults(results));
      saveSearchHistory(newQuery); // Сохраняем историю поиска в Firebase
      navigate(`/search?query=${encodeURIComponent(newQuery)}`);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleSearch = () => {
    if (query.trim() === '') {
      dispatch(clearSearchResults());
    } else {
      searchMoviesHandler(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
