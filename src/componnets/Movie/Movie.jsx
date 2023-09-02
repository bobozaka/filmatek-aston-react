import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useUserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import styles from './Movie.module.scss';

function Movie({ item }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useUserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        saveShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
  return (
    <div className={styles.movie__card} key={item.id}>
      {item.backdrop_path ? (
        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
      ) : (
        <div>No Image Available</div>
      )}
      <div>
        <p className={styles.movie__card_title}>{item.title}</p>
        <button
          type="button"
          onClick={saveShow}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              saveShow();
            }
          }}
          className={styles.movie__card_like}
        >
          {like ? <FaHeart /> : <FaRegHeart />}
        </button>
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
