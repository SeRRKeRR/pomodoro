import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reduser';
import { getMS } from '../../../../utils/ts/getTime';
import { setActiveStartPause } from '../../../../utils/ts/setActiveStartPause';
import { TimeAnimation } from '../TimeAnimation';
import styles from './timerwork.scss';

interface ITimerWork {
  time: number
  active?: boolean
  start?: boolean
  work?: boolean
}

export function TimerWork({time, active, start, work}: ITimerWork) {
  const lastTime = useSelector<RootState, number>(state => state.timer.lastTime)
  const arrayLastTime = getMS(lastTime).split('')
  const arrayTime = getMS(time).split('')
  let   styleTimer = styles.Start

  if (typeof work !== 'undefined' && typeof active !== 'undefined' && typeof start !== 'undefined') {
    styleTimer = setActiveStartPause({active: active, start: start, work: work, styles: styles})
  }

  return (
    <div className={styles.container}>
      <TimeAnimation time={Number(arrayTime[0])} lastTime={Number(arrayLastTime[0])} second={false} style={styleTimer}/>
      <TimeAnimation time={Number(arrayTime[1])} lastTime={Number(arrayLastTime[1])} second={false} style={styleTimer}/>
      <span className={`${styles.separator} ${styleTimer}`}>{arrayTime[2]}</span>
      <TimeAnimation time={Number(arrayTime[3])} lastTime={Number(arrayLastTime[3])} second={true} style={styleTimer}/>
      <TimeAnimation time={Number(arrayTime[4])} lastTime={Number(arrayLastTime[4])} second={true} style={styleTimer}/>
    </div>
  );
}
