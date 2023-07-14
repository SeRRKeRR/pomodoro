import React from 'react';
import { Link } from 'react-router-dom';
import styles from './btnhome.scss';

export function BtnHome() {
  return (
    <Link to={'/pomodoro'} className={styles.btn}>
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} width="24px" height="24px"  viewBox="0 0 20 20" fill="none">
        <path d="m16 8.5l1.53 1.53l-1.06 1.06L10 4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z"/>
      </svg>
      <span className={styles.text}>Главная</span>
    </Link>
  );
}
