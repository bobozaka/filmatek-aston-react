import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchMovies, fetchMovieData } from '../../utils';
import {
  setSearchResults,
  clearSearchResults,
} from '../../redux/reducers/slices/searchResultsSlice';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [query, setQuery] = useState('');
  const searchResults = useSelector((state) => state.app.searchResults);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMoviesHandler = async (newQuery) => {
    try {
      const results = await searchMovies(newQuery);
      dispatch(setSearchResults(results));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleItemClick = async (movie) => {
    try {
      const movieData = await fetchMovieData(movie.id);
      navigate(`/movie/${movie.id}`, { state: { movieData } });
      setQuery('');
      dispatch(clearSearchResults());
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() === '') {
      dispatch(clearSearchResults());
    } else {
      searchMoviesHandler(newQuery);
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
        />
        <button type="button" onClick={() => searchMoviesHandler(query)}>
          Search
        </button>
      </div>
      {searchResults && searchResults.length > 0 && (
        <ul className={styles.results}>
          {searchResults.map((movie) => (
            <button type="button" key={movie.id} onClick={() => handleItemClick(movie)}>
              {movie.title}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
