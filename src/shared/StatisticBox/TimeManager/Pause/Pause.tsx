import React from 'react';
import { getHM } from '../../../../utils/ts/getTime';
import styles from './pause.scss';

interface IPause {
  timePause: number
}

export function Pause({timePause}: IPause) {
  const pauseBool = Math.floor(timePause / 60) > 0
  const colorSvg = `${pauseBool ? '#9C97D7' : '#C4C4C4'}`

  return (
    <div className={`${styles.container} ${pauseBool ? styles.active : ''}`}>
      <div className={styles.box}>
        <span className={styles.heading}>Время на паузе</span>
        <span className={styles.headingmobile}>Время пауз</span>
        <div className={styles.cnt}>{`${getHM(Math.floor(timePause / 60))}`}</div>
      </div>
      <svg className={styles.svg} width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={colorSvg} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M57.3154 30.1579V57.3158L70.8944 70.8947" stroke={colorSvg} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
