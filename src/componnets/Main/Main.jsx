import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import truncateString from '../../utils';
import Loading from '../Loading/Loading';
import style from './Main.module.scss';

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

  const truncatedOverview = truncateString(movie.overview, 150);
  return (
    <div className={style.main__container}>
      <div className={style.main__screensaver}>
        <div className={style.main__screensaver_theam} />
        <img
          className={style.main__screensaver_img}
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className={style.main__screensaver_info}>
          <h1 className={style.main__screensaver_title}>{movie?.title}</h1>
          <div>
            <button type="button" className={style.main__screensaver_button}>
              Play
            </button>
            <button type="button" className={style.main__screensaver_button}>
              Watch later
            </button>
          </div>
          <p className={style.main__screensaver_relesed}>Released:{`${movie?.release_date}`}</p>
          <p className={style.main__screensaver_overview}>{truncatedOverview}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
