import React from 'react';
import { checkDateStatistics } from '../../utils/ts/checkDateStatistics';
import { DropdownMenu } from './DropdownMenu';
import { Graph } from './Graph';
import { PomodoroCNT } from './PomodoroCNT';
import styles from './statisticbox.scss';
import { TimeManager } from './TimeManager';

export function StatisticBox() {
  checkDateStatistics()

  return (
    <div className={styles.statistics}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Ваша активность</h1>
        <DropdownMenu/>
      </div>
      <div className={styles.centralBox}>
        <div className={styles.leftColumn}>
          <PomodoroCNT/>
        </div>
        <div className={styles.rightColumn}>
          <Graph/>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <div className={styles.boxPomodoroCNT}>
          <PomodoroCNT/>
        </div>
        <TimeManager/>
      </div>
    </div>
  );
}
