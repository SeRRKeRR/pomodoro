import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTasksStorage } from '../../../../../localStorage/localStorageChange';
import { editTask, ITask, RootState } from '../../../../../store/reduser';
import { useFocus } from '../../../../../utils/hooks/useFocus';
import styles from './edittaskform.scss';

interface IEditTaskFormProps {
  task: ITask
  onClose: () => void
}

export function EditTaskForm({task, onClose}: IEditTaskFormProps) {
  const [ editTaskText, setEditTaskText ] = useState(task.task)
  const [ cancelState, setCancelState ] = useState(false)
  const [ permission, setPermission ] = useState(true)
  const tasks = useSelector<RootState, ITask[]>(store => store.tasks)
  const dispatch = useDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEditTaskText(e.target.value)
    if (!e.target.value) {
      setPermission(false)
    } else {
      if (!permission) setPermission(true)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (cancelState) {
      onClose()
    } else {
      if (permission) {
        dispatch(editTask({id: task.id, task: editTaskText, pomodoro: task.pomodoro}))
        onClose()
      }
    }
  }

  useEffect(() => {
    changeTasksStorage(tasks)
  }, [tasks])

 const [ref] = useFocus()

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} value={editTaskText} onChange={handleChange} ref={ref}/>
      <button className={styles.btnOk} type='submit'>
      <svg className={`${styles.svgOk} ${permission ? '' : styles.nonActive}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
        <g>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417L5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </g>
      </svg>
      </button>
      <button className={styles.btnNo} type='submit' onClick={() => setCancelState(true)}>
      <svg className={styles.svgNo} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zM2 10a8 8 0 0 1 1.69-4.9L14.9 16.31A8 8 0 0 1 2 10zm14.31 4.9L5.1 3.69A8 8 0 0 1 16.31 14.9z"/>
      </svg>
      </button>
    </form>
  );
}
