import { WeekStatisticsState } from "../../store/weekStatistics/weekStatisticsReduser";

export function getMaxTime(weekState: WeekStatisticsState) {
  const timeAll = Object.values(weekState).map((value) => {
    if (typeof value !== 'number' && typeof value.timeWork === 'number') {
      return value.timeWork
    } else {
      return 0
    }})

  return Math.max(...timeAll)
}
