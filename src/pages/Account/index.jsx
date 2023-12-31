import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import SavedShows from '../../componnets/SavedShows';
import styles from './Account.module.scss';

function Account() {
  return (
    <>
      <div className={styles.account__container}>
        <img
          className={styles.account__img}
          src="https://pressa.tv/uploads/posts/2020-01/1579194185_pressa_tv_glass.jpeg"
          alt="User Avatar"
        />
        <div className={styles.account__theme} />
        <div>
          <h1 className={styles.account__title}>My Shows</h1>
        </div>
      </div>
      <SavedShows />
      <Link to="/history" className={styles.account__button}>
        View Search History
      </Link>
    </>
  );
}

export default Account;
