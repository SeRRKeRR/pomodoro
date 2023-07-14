import { ITask } from "../store/reduser";
import { StatisticsActiveState } from "../store/statisticsActive/statisticsActivereduser";
import { TimerState } from "../store/timer/timerReduser";
import { WeekStatisticsState } from "../store/weekStatistics/weekStatisticsReduser";

export function changeTasksStorage(tasks: ITask[]) {
  global.window.localStorage.tasks = JSON.stringify(tasks)
}

export function changeTimerStorage(timer: TimerState) {
  global.window.localStorage.timer = JSON.stringify(timer)
}

export function changeStatisticsActiveStorage(statisticsActive: StatisticsActiveState) {
  global.window.localStorage.statisticsActive = JSON.stringify(statisticsActive)
}

export function changeNowWeekStorage(nowWeek: WeekStatisticsState) {
  global.window.localStorage.nowWeek = JSON.stringify(nowWeek)
}

export function changeLastWeekStorage(lastWeek: WeekStatisticsState) {
  global.window.localStorage.lastWeek = JSON.stringify(lastWeek)
}

export function changeBeforeLastWeekStorage(beforeLastWeek: WeekStatisticsState) {
  global.window.localStorage.beforeLastWeek = JSON.stringify(beforeLastWeek)
}

export function changeThemeStorage(darkTheme: boolean) {
  global.window.localStorage.darkTheme = JSON.stringify(darkTheme)
}
