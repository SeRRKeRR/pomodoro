import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delTaskAnimation, peepTimeAnimation } from '../../animations/tasksAnimations';
import { changeTimerStorage, changeTasksStorage, changeNowWeekStorage } from '../../localStorage/localStorageChange';
import { decreasePomodoro, delTask, ITask, RootState } from '../../store/reduser';
import { changeActivePomodoro, changeStartPomodoro, changeTimerCNTPomodoro, changeWorkPomodoro, decreaseTime, setTimeoutPomodoro, TimerState } from '../../store/timer/timerReduser';
import { changeTimePause, changeTimeWork } from '../../store/weekStatistics/dayStatistics/dayStatisticsReduser';
import { WeekStatisticsState } from '../../store/weekStatistics/weekStatisticsReduser';
import { getNowDay } from '../../utils/ts/nowDate';
import styles from './timerfunction.scss';

export function TimerFunction() {
  const start = useSelector<RootState, boolean>(state => state.timer.start)
  const work = useSelector<RootState, boolean>(state => state.timer.work)
  const active = useSelector<RootState, boolean>(state => state.timer.active)
  const timeout = useSelector<RootState, NodeJS.Timeout>(state => state.timer.timeout)
  const time = useSelector<RootState, number>(state => state.timer.time)
  const task = useSelector<RootState, ITask>(state => state.tasks[0])
  const tasks = useSelector<RootState, ITask[]>(store => store.tasks)
  const nowWeek = useSelector<RootState, WeekStatisticsState>(state => state.nowWeek)
  const timer = useSelector<RootState, TimerState>(store => store.timer)
  const timerCNT = useSelector<RootState, number>(state => state.timer.timerCNT)
  const CNT = useSelector<RootState, number>(state => state.timer.CNT)
  const nowDay = getNowDay()
  const dispatch = useDispatch()

  useEffect(() => {
    clearInterval(timeout)
    if (active || !work) {
      const timer = setInterval(() => {
        if (!start && work) {
          dispatch(changeTimePause(nowDay))
        } else {
          dispatch(decreaseTime())
          if (work) dispatch(changeTimeWork(nowDay))
        }
      }, 1000)
      dispatch(setTimeoutPomodoro(timer))
    }
  }, [active, start, work])

  useEffect(() => {
    if (!time) {
      clearInterval(timeout)
      if (work) {
        setTimeout(() => {
          dispatch(changeTimerCNTPomodoro())
          dispatch(changeStartPomodoro(false))
          dispatch(changeActivePomodoro(false))
          dispatch(changeWorkPomodoro(false))
          if (task.pomodoro === 1) {
            delTaskAnimation(task.id, 0.5)
            peepTimeAnimation(tasks.length, 0.5)
            setTimeout(() => dispatch(delTask(task.id)), 500)
          } else {
            dispatch(decreasePomodoro(task.id))
          }
        }, 1000)
      } else {
        setTimeout(() => {
          if (timerCNT >= CNT) dispatch(changeTimerCNTPomodoro())
          dispatch(changeWorkPomodoro(true))
        }, 1000)
      }
    }
  }, [time, work])

  useEffect(() => {
    changeTimerStorage(timer)
  }, [timer])

  useEffect(() => {
    changeTasksStorage(tasks)
  }, [tasks])

  useEffect(() => {
    changeNowWeekStorage(nowWeek)
  }, [nowWeek])

  return (
    <></>
  );
}
