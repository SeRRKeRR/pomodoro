import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNewTaskAdd, ITask, RootState } from '../../../../store/reduser';
import { DropdownMenu } from '../DropdownMenu';
import { EditTaskForm } from './EditTaskForm';
import gsap from 'gsap';
import styles from './task.scss';
import { newTaskAnimation } from '../../../../animations/tasksAnimations';

export function Task({task, pomodoro, id}: ITask) {
  const [ editTask, setEditTask ] = useState(false)
  const [ taskEnd ] = useSelector<RootState, ITask[]>(state => state.tasks).slice(-1)
  const newTaskAdd = useSelector<RootState, boolean>(state => state.newTaskAdd)
  const ref = useRef<HTMLLIElement>(null)
  const dispatch = useDispatch()

  let styleActive = ''
  if (taskEnd.id === id && newTaskAdd) styleActive = styles.nonActive

  useEffect(() => {
    if (taskEnd.id === id && newTaskAdd) {
      newTaskAnimation(ref.current, 1)
      dispatch(changeNewTaskAdd(false))
    }
  }, [])

  return (
    <li className={`${styles.toDo} ${styleActive}`} id={id} ref={ref}>
      <div className={styles.box}>
        <div className={styles.pomodoros}>{pomodoro}</div>
        <div className={styles.textBox}>
          {!editTask && <span className={styles.task}>{task}</span>}
          {editTask && <EditTaskForm task={{task, pomodoro, id}} onClose={() => setEditTask(false)}/>}
        </div>
      </div>
      <DropdownMenu id={id} onEdit={() => setEditTask(true)}/>
    </li>
  );
}
