import React from 'react';
import styles from './stop.scss';

interface IStop {
  stops: number
}

export function Stop({stops}: IStop) {
  const stopBool = stops > 0
  const colorSvg = `${stopBool ? '#7FC2D7' : '#C4C4C4'}`

  return (
    <div className={`${styles.container} ${stopBool ? styles.active : ''}`}>
      <div className={styles.box}>
        <span className={styles.heading}>Остановки</span>
        <div className={styles.cnt}>{`${stops}`}</div>
      </div>
      <svg className={styles.svg} width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={colorSvg} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 20L95 94" stroke={colorSvg} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
