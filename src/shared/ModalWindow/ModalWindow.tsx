import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { delTaskAnimation, peepTimeAnimation } from '../../animations/tasksAnimations';
import { changeTimerStorage, changeTasksStorage } from '../../localStorage/localStorageChange';
import { delTask, ITask, RootState } from '../../store/reduser';
import { changeActivePomodoro, changeStartPomodoro, increaseTimePomodoro, TimerState } from '../../store/timer/timerReduser';
import { useClose } from '../../utils/hooks/useClose';
import { useModalHeight } from '../../utils/hooks/useModalHeight';
import styles from './modalwindow.scss';

interface IModalWindowProps {
  onClose: () => void
  id: string
  set: boolean
}

export function ModalWindow({onClose, id, set}: IModalWindowProps) {
  const idFirstTask = useSelector<RootState, string>(state => state.tasks[0]?.id)
  const tasks = useSelector<RootState, ITask[]>(store => store.tasks)
  const timer = useSelector<RootState, TimerState>(store => store.timer)
  const timePomodoro = useSelector<RootState, number>(state => state.timer.pomodoro)
  const timeOut = useSelector<RootState, NodeJS.Timeout>(state => state.timer.timeout)
  const dispatch = useDispatch()

  const handelClickDel = () => {
    if (id === idFirstTask) {
      dispatch(changeActivePomodoro(false))
      dispatch(changeStartPomodoro(false))
      dispatch(increaseTimePomodoro(timePomodoro))
      clearInterval(timeOut)
    }
    delTaskAnimation(id, 0.5)
    peepTimeAnimation(tasks.length, 0.5)
    setTimeout(() => dispatch(delTask(id)), 500)
    onClose()
  }

  const [ ref ] = useClose(onClose, set)
  const [ refWindow ] = useModalHeight()


  useEffect(() => {
    changeTimerStorage(timer)
  }, [timer])

  useEffect(() => {
    changeTasksStorage(tasks)
  }, [tasks])

  const node = document.getElementById('modal-root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.window} ref={refWindow}>
      <div className={styles.container} ref={ref}>
        <span className={styles.heading}>Удалить задачу?</span>
        <button className={styles.btnDel} onClick={handelClickDel}>Удалить</button>
        <button className={styles.btnCansel} onClick={onClose}>Отмена</button>
        <div className={styles.closeBox}>
          <button className={styles.close} onClick={onClose}/>
        </div>
      </div>
    </div>
  ), node);
}

