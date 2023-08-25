import React from 'react';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__spinner} />
      <p>Загрузка...</p>
    </div>
  );
}

export default Loading;
