import React from 'react';
import { useDayStatistics } from '../../../utils/hooks/useStatistics';
import { Focus } from './Focus';
import { Pause } from './Pause';
import { Stop } from './Stop';
import styles from './timemanager.scss';

export function TimeManager() {
  const [dayState] = useDayStatistics()

  return (
    <ul className={styles.timeManager}>
      <li className={styles.item}>
        <Focus timePause={dayState.timePause} timeWork={dayState.timeWork}/>
      </li>
      <li className={styles.item}>
        <Pause timePause={dayState.timePause}/>
      </li>
      <li className={styles.item}>
        <Stop stops={dayState.stops}/>
      </li>
    </ul>
  );
}
