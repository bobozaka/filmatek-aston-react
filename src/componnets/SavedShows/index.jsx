import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { updateDoc, doc as firestoreDoc, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import styles from './SavedShows.module.scss';

function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = useUserAuth();

  useEffect(() => {
    onSnapshot(firestoreDoc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.saveShows);
    });
  }, [user?.email]);

  const movieRef = firestoreDoc(db, 'users', `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, { saveShows: result });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.saved__container}>
      <h2 className={styles.saved__title}>My Saved Shows</h2>
      <div className={styles.saved__slider_contaner}>
        <div className={styles.saved__slider} id="slider">
          {movies &&
            movies.map((item) => (
              <div className={styles.saved__card} key={item.id}>
                <Link to={`/movie/${item.id}`}>
                  {item.img ? (
                    <img src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt={item.title} />
                  ) : (
                    <div className={styles.no__image}>No Image Available</div>
                  )}
                </Link>
                <div>
                  <p className={styles.saved__card__title}>{item.title}</p>
                  <button
                    type="button"
                    onClick={() => deleteShow(item.id)}
                    className={styles.delete__button}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SavedShows;
