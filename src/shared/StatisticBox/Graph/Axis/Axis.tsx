import React from 'react';
import { getHM, getHMin } from '../../../../utils/ts/getTime';
import styles from './axis.scss';

interface IAxisProps {
  time: number
}

export function Axis({time}: IAxisProps) {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.timeMobile}>{getHM(time)}</div>
      <div className={styles.time}>{getHMin(time)}</div>
    </div>
  );
}
