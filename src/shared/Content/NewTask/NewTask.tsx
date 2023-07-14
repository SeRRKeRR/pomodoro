import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTasksStorage } from '../../../localStorage/localStorageChange';
import { changeNewTaskAdd, ITask, RootState, updateTask } from '../../../store/reduser';
import { generateRandomString } from '../../../utils/ts/generateRandomIndex';
import styles from './newtask.scss';

export function NewTask() {
  const dispatch = useDispatch()
  const [ inputState, setInputState ] = useState('')
  const tasks = useSelector<RootState, ITask[]>(store => store.tasks)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (inputState) {
      dispatch(changeNewTaskAdd(true))
      dispatch(updateTask({
        task: inputState,
        pomodoro: 1,
        id: generateRandomString().replace(/\d/g, '')
      }))
    }
    setInputState('')
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputState(e.target.value)
  }

  useEffect(() => {
    changeTasksStorage(tasks)
  }, [tasks])

  return (
    <form className={styles.form} onSubmit={handleSubmit} action="#">
      <input className={styles.input} type="text" placeholder='Название задачи' onChange={handleChange} value={inputState}/>
      <button className={`${styles.btnSubmit} ${!inputState ? styles.nonActive : ''}`} type='submit'>Добавить</button>
    </form>
  );
}
