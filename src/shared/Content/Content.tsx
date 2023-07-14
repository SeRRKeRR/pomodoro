import React, { useRef, useState } from 'react';
import styles from './content.scss';
import { InstructionBtn } from './InstructionBtn';
import { NewTask } from './NewTask';
import { TimerBox } from './TimerBox';
import { ToDoList } from './ToDoList';

export function Content() {
  const ref = useRef<HTMLDivElement>(null)
  const [ dropdown, setDropdown ] = useState(false)
  const [ timer, setTimer ] = useState(setTimeout(() => {}, 1))

  const isDropdown = () => {
    clearTimeout(timer)
    if (ref.current) {
      if (dropdown) {
        const timeOut = setTimeout(() => ref.current?.classList.remove(styles.open), 300)
        setTimer(timeOut)
      } else {
        ref.current?.classList.add(styles.open)
      }
      setTimeout(() => ref.current?.classList.toggle(styles.animation), 1)
      setDropdown(!dropdown)
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.leftBox}>
        <div className={styles.instructionBox}>
          <InstructionBtn isDropdown={isDropdown}/>
        </div>
        <div className={styles.instructionsBox} ref={ref}>
          <h1></h1>
          <h2 className={styles.headingInstructions}>Ура! Теперь можно начать работать:</h2>
          <ul className={styles.listInstructions}>
            <li className={styles.instruction}>Выберите категорию и напишите название текущей задачи</li>
            <li className={styles.instruction}>Запустите таймер («помидор»)</li>
            <li className={styles.instruction}>Работайте пока «помидор» не прозвонит</li>
            <li className={styles.instruction}>Сделайте короткий перерыв (3-5 минут)</li>
            <li className={styles.instruction}>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)</li>
          </ul>
        </div>
        <div className={styles.toDoBox}>
          <NewTask/>
          <ToDoList/>
        </div>
      </div>
      <div className={styles.rightBox}>
        <TimerBox/>
      </div>
    </div>
  );
}
