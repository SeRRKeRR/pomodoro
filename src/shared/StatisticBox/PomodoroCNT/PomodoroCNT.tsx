import React from 'react';
import { useDayStatistics } from '../../../utils/hooks/useStatistics';
import { Cnt } from './Cnt';
import { Data } from './Data';
import styles from './pomodorocnt.scss';

export function PomodoroCNT() {
  const [dayState] = useDayStatistics()
  const timeWork = dayState.timeWork

  return (
    <div className={styles.cntContainer}>
      <Data timeWork={timeWork}/>
      <Cnt timeWork={timeWork}/>
    </div>
  );
}
