import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import axios from 'axios';
import Movie from '../Movie';
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
      <div className={`${styles.row__slider} perfect-scrollbar-container`}>
        <PerfectScrollbar
          options={{
            suppressScrollX: false, 
            wheelPropagation: false,
          }}
        >
          <div className="perfect-scrollbar-content">
            <div className={styles.horizontalContainer}>
              {movies.map((item) => (
                <Link key={item.id} to={`/movie/${item.id}`} className={styles.row__link}>
                  <Movie item={item} />
                </Link>
              ))}
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired,
};

export default Row;
