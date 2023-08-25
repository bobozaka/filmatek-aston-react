import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import style from './Main..module.scss';

function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return `${str.slice(0, num)}...`;
    }
    return str;
  };

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
          <p className={style.main__screensaver_overview}>{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
