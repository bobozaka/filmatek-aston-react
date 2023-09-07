import React, { useEffect, useState } from 'react';
import { useFetchPopularQuery } from '../../redux/api';
import truncateString, { redirectToTrailer } from '../../utils';
import Loading from '../Loading';
import styles from './Main.module.scss';

function Main() {
  const { data: movies, isLoading, isError } = useFetchPopularQuery();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.results && movies.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.results.length);
      setMovie(movies.results[randomIndex]);
    }
  }, [movies]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading data</div>;
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
          <p className={styles.main__screensaver_relesed}>Released: {movie?.release_date}</p>
          <p className={styles.main__screensaver_overview}>{truncatedOverview}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
