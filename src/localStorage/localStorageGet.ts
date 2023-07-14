import { WeekStatisticsState } from "../store/weekStatistics/weekStatisticsReduser";
import { getNowWeek } from "../utils/ts/nowDate";
import { setWeekInitialState } from "../utils/ts/setWeekInitialState";

export function getNowWeekState() {
  const LocalStor = global.window.localStorage
  let state: WeekStatisticsState

  if (LocalStor.nowWeek) {
    state = JSON.parse(LocalStor.nowWeek)
  } else {
    state = setWeekInitialState(getNowWeek())
  }

  return state
}


export function getLastWeekState() {
  const LocalStor = global.window.localStorage
  let state: WeekStatisticsState

  if (LocalStor.lastWeek) {
    state = JSON.parse(LocalStor.lastWeek)
  } else {
    state = setWeekInitialState(getNowWeek() - 1)
  }

  return state
}
