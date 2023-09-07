import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import Movie from '../Movie';
import styles from './Row.module.scss';

function Row({ title, data }) {
  if (!data) {
    return null;
  }

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
              {data.map((item) => (
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Row.defaultProps = {
  data: null,
};

export default Row;
