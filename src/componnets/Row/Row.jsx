import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
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

  return (
    <div className={styles.row__container}>
      <h2 className={styles.row__title}>{title}</h2>
      <div className={styles.row__slider_contaner}>
        <div className={styles.row__slider} id="slider">
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired,
};

export default Row;
