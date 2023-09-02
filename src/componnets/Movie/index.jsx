import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { arrayUnion, arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useUserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import styles from './Movie.module.scss';

function Movie({ item }) {
  const { user } = useUserAuth();
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user?.email) {
      const movieRef = doc(db, 'users', `${user?.email}`);
      const getUserDocument = async () => {
        try {
          const userDoc = await getDoc(movieRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData && userData.saveShows) {
              const isMovieSaved = userData.saveShows.some((savedItem) => savedItem.id === item.id);
              setSaved(isMovieSaved);
            }
          }
        } catch (error) {
          console.error('Error checking saved movies:', error);
        }
      };

      getUserDocument();
    }
  }, [user?.email, item.id]);

  const toggleSave = async () => {
    if (!user?.email) {
      alert('Please log in to save a movie');
      return;
    }

    setLike(!like);
    setSaved(!saved);

    const movieRef = doc(db, 'users', `${user?.email}`);
    const movieData = {
      id: item.id,
      title: item.title,
      img: item.backdrop_path,
    };

    try {
      const updateData = saved
        ? { saveShows: arrayRemove(movieData) }
        : { saveShows: arrayUnion(movieData) };

      await updateDoc(movieRef, updateData);
    } catch (error) {
      console.error(`Error ${saved ? 'deleting' : 'saving'} movie:`, error);
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
          onClick={toggleSave}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleSave();
            }
          }}
          className={styles.movie__card_like}
        >
          {saved ? <FaHeart /> : <FaRegHeart />}
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
