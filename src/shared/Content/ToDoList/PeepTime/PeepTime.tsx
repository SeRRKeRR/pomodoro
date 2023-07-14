import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reduser';
import { getHoursMin } from '../../../../utils/ts/getTime';
import styles from './peeptime.scss';

interface IPeepTimeProps {
  pomodoros: number
}

export function PeepTime({pomodoros}: IPeepTimeProps) {
  const time = useSelector<RootState, number>(state => state.timer.time)
  const pomodoroTime = useSelector<RootState, number>(state => state.timer.pomodoro)

  return (
    <div className={styles.timer} id='peepTime'>
      {getHoursMin(Math.round((pomodoros - 1) * pomodoroTime / 60 + Math.round(time / 60)))}
    </div>
  );
}
