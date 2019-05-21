import React from 'react';

import styles from './styles.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
