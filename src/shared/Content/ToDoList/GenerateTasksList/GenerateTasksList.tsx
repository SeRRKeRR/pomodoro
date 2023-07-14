import React from 'react';
import { ITask } from '../../../../store/reduser';
import { generateKey } from '../../../../utils/ts/generateRandomIndex';
import { Task } from '../Task';
import styles from './generatetaskslist.scss';

interface IGenerateTasksListProps {
  list: ITask[]
}

export function GenerateTasksList({list}: IGenerateTasksListProps) {
  const cards = list.map(generateKey)
  return (
    <>
      {cards.map(({
        task,
        pomodoro,
        id,
        key
        }) => (
        <Task
          task={task}
          pomodoro={pomodoro}
          id={id}
          key={key}
        />
      ))}
    </>
  );
}
