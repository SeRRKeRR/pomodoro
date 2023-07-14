import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITask, RootState } from '../../../../store/reduser';
import { changeActivePomodoro, changeStartPomodoro, changeTimerCNTPomodoro, changeWorkPomodoro, increaseTimePomodoro } from '../../../../store/timer/timerReduser';
import { changeStops } from '../../../../store/weekStatistics/dayStatistics/dayStatisticsReduser';
import { getNowDay } from '../../../../utils/ts/nowDate';
import { TimerWork } from '../TimerWork';
import styles from './timermenu.scss';

interface ITimerMenuProps {
  active: boolean
  start: boolean
  work: boolean
}

export function TimerMenu({active, start, work}: ITimerMenuProps) {
  const dispatch = useDispatch()
  const tasks = useSelector<RootState, ITask[]>(state => state.tasks)
  const timeout = useSelector<RootState, NodeJS.Timeout>(state => state.timer.timeout)
  const time = useSelector<RootState, number>(state => state.timer.time)
  const timerCNT = useSelector<RootState, number>(state => state.timer.timerCNT)
  const CNT = useSelector<RootState, number>(state => state.timer.CNT)
  const nowDay = getNowDay()
  const task = tasks[0]

  const handleStart = () => {
    dispatch(changeActivePomodoro(true))
    dispatch(changeStartPomodoro(true))
  }

  const handlePause = () => {
    clearInterval(timeout)
    dispatch(changeStartPomodoro(false))
    dispatch(changeStops(nowDay))
  }

  const handleClickIncrease = () => {
    dispatch(increaseTimePomodoro(time + 60))
  }

  function endRest() {
    clearInterval(timeout)
    if (timerCNT >= CNT) dispatch(changeTimerCNTPomodoro())
    dispatch(changeWorkPomodoro(true))
  }

  return (
    <div className={styles.box}>
      <TimerWork time={time} active={active} start={start} work={work}/>
      {work &&
        <>
          <div className={styles.boxTask}>
            <span className={styles.task}>
              Задача 1 -&#160;
              <span className={styles.taskName}>{task ? task.task : 'Название задачи'}</span>
            </span>
            <button className={`${styles.btnAdd} ${!time ? styles.nonActive : ''}`} onClick={handleClickIncrease}>
              <div className={styles.plus}></div>
            </button>
          </div>
          <div className={styles.btnsBox}>
            <button className={`${styles.btnStart} ${start || !task ? styles.nonActive : ''}`} onClick={handleStart}>Старт</button>
            <button className={`${styles.btnStop} ${!start || !time ? styles.nonActive : ''}`} onClick={handlePause}>Стоп</button>
          </div>
        </>
      }
      {!work &&
      <>
        <span className={styles.task}>Время отдыха</span>
        <button className={`${styles.btnStop} ${!time ? styles.nonActive : ''}`} onClick={endRest}>Закончить</button>
      </>
      }
    </div>
  );
}
