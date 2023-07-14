import { useSelector } from "react-redux"
import { RootState } from "../../store/reduser"
import { WeekStatisticsState } from "../../store/weekStatistics/weekStatisticsReduser"

export function useDayStatistics() {
  const nowWeek = useSelector<RootState, WeekStatisticsState>(state => state.nowWeek)
  const lastWeek = useSelector<RootState, WeekStatisticsState>(state => state.lastWeek)
  const beforeLastWeek = useSelector<RootState, WeekStatisticsState>(state => state.beforeLastWeek)
  const week = useSelector<RootState, string>(state => state.statisticsActive.week)
  const day = useSelector<RootState, string>(state => state.statisticsActive.day)

  let weekState = nowWeek
  if (week === 'nowWeek') {
    weekState = nowWeek
  } else if (week === 'lastWeek') {
    weekState = lastWeek
  } else if (week === 'beforeLastWeek') {
    weekState = beforeLastWeek
  }

  let  [dayState] = Object.entries(weekState).map(([key, value]) => {if (key === day && typeof value !== 'number') return value}).filter(obj => obj !== undefined)
  if (!dayState) dayState = { timeWork: 0, timePause: 0, stops: 0 }
  return [dayState]
}

export function useWeekStatistics() {
  const nowWeek = useSelector<RootState, WeekStatisticsState>(state => state.nowWeek)
  const lastWeek = useSelector<RootState, WeekStatisticsState>(state => state.lastWeek)
  const beforeLastWeek = useSelector<RootState, WeekStatisticsState>(state => state.beforeLastWeek)
  const week = useSelector<RootState, string>(state => state.statisticsActive.week)

  let weekState = nowWeek
  if (week === 'nowWeek') {
    weekState = nowWeek
  } else if (week === 'lastWeek') {
    weekState = lastWeek
  } else if (week === 'beforeLastWeek') {
    weekState = beforeLastWeek
  }

  return [weekState]
}

