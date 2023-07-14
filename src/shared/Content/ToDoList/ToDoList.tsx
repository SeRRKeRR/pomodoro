import React from 'react';
import { useSelector } from 'react-redux';
import { ITask, RootState } from '../../../store/reduser';
import { GenerateTasksList } from './GenerateTasksList';
import { PeepTime } from './PeepTime';
import styles from './todolist.scss';

export function ToDoList() {
  const tasks = useSelector<RootState, ITask[]>(state => state.tasks)
  const tasksLength = Boolean(tasks.length)

  let pomodoros = 0

  tasks.forEach(e => {
    pomodoros += e.pomodoro
  })

  return (
    <>
      {tasksLength &&
        <div className={styles.container}>
          <ul className={styles.toDoList}>
            <GenerateTasksList list={tasks} />
          </ul>
          <PeepTime pomodoros={pomodoros}/>
        </div>
      }
    </>
  );
}
