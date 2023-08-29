import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Movie.module.scss';

function Movie({ item }) {
  const [like] = useState(false);
  return (
    <div className={styles.movie__card} key={item.id}>
      {item.backdrop_path ? (
        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
      ) : (
        <div>No Image Available</div>
      )}
      <div>
        <p className={styles.movie__card_title}>{item.title}</p>
        <p className={styles.movie__card_like}>{like ? <FaHeart /> : <FaRegHeart />}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
  }).isRequired,
};

export default Movie;
