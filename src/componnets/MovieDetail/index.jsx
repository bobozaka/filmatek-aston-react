import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieData } from '../../utils';
import styles from './MovieDetail.module.scss'; // Импорт стилей

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        if (!movieId) {
          throw new Error('Invalid movieId');
        }

        const movieData = await fetchMovieData(movieId);
        setMovie(movieData); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div className={styles.loading}>Loading...</div>; // Используем стиль из модуля
  }

  return (
    <div className={styles.movieDetail_сontainer}>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
    </div>
  );
}

export default MovieDetail;
