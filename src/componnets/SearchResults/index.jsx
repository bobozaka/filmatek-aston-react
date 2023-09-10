import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SearchResults.module.scss';

function SearchResults() {
  const searchResults = useSelector((state) => state.app.searchResults); 

  return (
    <div className={styles.searchResults}>
      {searchResults && searchResults.length > 0 ? (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
