import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeStatisticsActiveStorage } from '../../../localStorage/localStorageChange';
import { RootState } from '../../../store/reduser';
import { StatisticsActiveState } from '../../../store/statisticsActive/statisticsActivereduser';
import { useWeekStatistics } from '../../../utils/hooks/useStatistics';
import { getHeightAxis } from '../../../utils/ts/getHeightAxis';
import { getMaxTime } from '../../../utils/ts/getMaxTime';
import { getMinAxisValue } from '../../../utils/ts/getMinAxisValue';
import { Axis } from './Axis';
import { BtnDay } from './BtnDay';
import styles from './graph.scss';

export function Graph() {
  const statisticsActive = useSelector<RootState, StatisticsActiveState>(state => state.statisticsActive)
  const [weekStatistics] = useWeekStatistics()
  const dayActive = statisticsActive.day
  const minValueAxis = getMinAxisValue(getMaxTime(weekStatistics))
  const maxTime = minValueAxis * 5 * 60


  useEffect(() => {
    changeStatisticsActiveStorage(statisticsActive)
  }, [statisticsActive])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Axis time={minValueAxis * 4}/>
        <Axis time={minValueAxis * 3}/>
        <Axis time={minValueAxis * 2}/>
        <Axis time={minValueAxis}/>
        <div className={styles.containerBtn}>
          <div className={styles.boxBtn}>
            <BtnDay day='Пн' height={getHeightAxis(maxTime, weekStatistics.monday.timeWork)} dayActive={dayActive}/>
            <BtnDay day='Вт' height={getHeightAxis(maxTime, weekStatistics.tuesday.timeWork)} dayActive={dayActive}/>
            <BtnDay day='Ср' height={getHeightAxis(maxTime, weekStatistics.wednesday.timeWork)} dayActive={dayActive}/>
            <BtnDay day='Чт' height={getHeightAxis(maxTime, weekStatistics.thursday.timeWork)} dayActive={dayActive}/>
            <BtnDay day='Пт' height={getHeightAxis(maxTime, weekStatistics.friday.timeWork)} dayActive={dayActive}/>
            <BtnDay day='Сб' height={getHeightAxis(maxTime, weekStatistics.saturday.timeWork)} dayActive={dayActive}/>
            <BtnDay day='Вс' height={getHeightAxis(maxTime, weekStatistics.sanday.timeWork)} dayActive={dayActive}/>
          </div>
        </div>
      </div>
      <div className={styles.row}></div>
    </div>
  );
}
