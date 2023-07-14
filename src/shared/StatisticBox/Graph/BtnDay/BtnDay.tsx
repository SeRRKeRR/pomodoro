import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDay } from '../../../../store/statisticsActive/statisticsActivereduser';
import styles from './btnday.scss';

interface IBtnDayProps {
  day: string
  height: number
  dayActive: string
}

export function BtnDay({day, height, dayActive}: IBtnDayProps) {
  const dispatch = useDispatch()
  let heightСalculated

  if (!height) {
    heightСalculated = `5px`
  } else {
    heightСalculated = `${height}%`
  }

  const css = {
    height: heightСalculated
  }

  let nowDay = 'monday'
  if (day === 'Пн') {
    nowDay = 'monday'
  } else if (day === 'Вт') {
    nowDay = 'tuesday'
  } else if (day === 'Ср') {
    nowDay = 'wednesday'
  } else if (day === 'Чт') {
    nowDay = 'thursday'
  } else if (day === 'Пт') {
    nowDay = 'friday'
  } else if (day === 'Сб') {
    nowDay = 'saturday'
  } else if (day === 'Вс') {
    nowDay = 'sanday'
  }

  const handleClick = () => {
    dispatch(changeDay(nowDay))
  }

  return (
    <button className={`${styles.btn}`} onClick={handleClick}>
      <div className={`${styles.backColor} ${height ? styles.orange : styles.gray} ${dayActive === nowDay ? styles.active : ''}`} style={css}></div>
      <span className={styles.day}>{day}</span>
    </button>
  );
}
