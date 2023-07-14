import React from 'react';
import { Link } from 'react-router-dom';
import styles from './btnstatistics.scss';

export function BtnStatistics() {
  return (
    <Link to={'/statistics'} className={styles.btn}>
      <svg className={styles.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z"/>
      </svg>
      <span className={styles.text}>Статистика</span>
    </Link>
  );
}
