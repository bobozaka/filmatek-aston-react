import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import truncateString, { redirectToTrailer } from '../../utils';
import Loading from '../Loading';
import styles from './Main.module.scss';

function Main() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [requests.requestPopular]);

  let movie;

  if (movies) {
    movie = movies[Math.floor(Math.random() * movies.length)];
  }

  if (!movie) {
    return <Loading />;
  }

  const playTrailer = () => {
    redirectToTrailer(movie.id);
  };

  const truncatedOverview = truncateString(movie.overview, 150);
  return (
    <div className={styles.main__container}>
      <div className={styles.main__screensaver}>
        <div className={styles.main__screensaver_theam} />
        <img
          className={styles.main__screensaver_img}
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className={styles.main__screensaver_info}>
          <h1 className={styles.main__screensaver_title}>{movie?.title}</h1>
          <div>
            <button type="button" onClick={playTrailer} className={styles.main__screensaver_button}>
              Play
            </button>
          </div>
          <p className={styles.main__screensaver_relesed}>Released:{`${movie?.release_date}`}</p>
          <p className={styles.main__screensaver_overview}>{truncatedOverview}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
