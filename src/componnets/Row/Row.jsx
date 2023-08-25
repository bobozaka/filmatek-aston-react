import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(url)
      .then((response) => {
        if (isMounted) {
          setData(response.data.results);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      isMounted = false;
    };
  }, [url]);

  return data;
}

function Row({ title, fetchURL }) {
  const movies = useFetch(fetchURL);
  const [like, setLike] = useState(false);

  return (
    <div className={styles.row__container}>
      <h2 className={styles.row__title}>{title}</h2>
      <div className={styles.row__slider} id="slider">
        {movies.map((item) => (
          <div className={styles.row__card} key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
            <div>
              <p className={styles.row__card_title}>{item.title}</p>
              <p className={styles.row__card_like}>{like ? <FaHeart /> : <FaRegHeart />}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired,
};

export default Row;
