import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reduser';
import { getHoursMinutes } from '../../../../utils/ts/getTime';
import styles from './data.scss';

interface IDataProps {
  timeWork: number
}

export function Data({timeWork}: IDataProps) {
  const dayActive = useSelector<RootState, string>(state => state.statisticsActive.day)
  const changeTime = Math.floor(timeWork / 60)

  let nowDay = 'Понедельник'
  if (dayActive === 'monday') {
    nowDay = 'Понедельник'
  } else if (dayActive === 'tuesday') {
    nowDay = 'Вторник'
  } else if (dayActive === 'wednesday') {
    nowDay = 'Среда'
  } else if (dayActive === 'thusday') {
    nowDay = 'Четверг'
  } else if (dayActive === 'friday') {
    nowDay = 'Пятница'
  } else if (dayActive === 'saturday') {
    nowDay = 'Суббота'
  } else if (dayActive === 'sanday') {
    nowDay = 'Воскресенье'
  }

  return (
    <div className={styles.data}>
      <span className={styles.day}>{nowDay}</span>
      <span className={styles.dayText}>
        {changeTime === 0 && 'Нет данных'}
        {changeTime !== 0 && <>
            Вы работали над задачами в течении
            <span>{' '}</span>
            <div className={styles.timeBox}>
              <span className={styles.time}>{`${getHoursMinutes(changeTime)}`}</span>
            </div>
          </>
        }
      </span>
  </div>
  );
}
