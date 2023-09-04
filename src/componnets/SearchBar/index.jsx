import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies, fetchMovieData } from '../../utils';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const searchMoviesHandler = async () => {
    try {
      setLoading(true);

      const results = await searchMovies(query);

      setSearchResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      setShowResults(false);
      return;
    }

    searchMoviesHandler();
  }, [query]);

  const handleItemClick = async (movie) => {
    setShowResults(false);

    try {
      const movieData = await fetchMovieData(movie.id);
      navigate(`/movie/${movie.id}`, { state: { movieData } });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
        />
        <button type="button" onClick={searchMoviesHandler}>
          Search
        </button>
      </div>
      {showResults && (
        <ul className={styles.results}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            searchResults.map((movie) => (
              <button
                type="button"
                key={movie.id}
                onClick={() => {
                  handleItemClick(movie);
                  setQuery('');
                }}
              >
                {movie.title}
              </button>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
