import { useDispatch } from "react-redux"
import { changeTheme, setBeforeLastWeek, setLastWeek, setNowWeek, setStatisticsActive, setTasks, setTimer } from "../store/reduser"

export function localStorageSetState() {
  const LocalStor = global.window.localStorage
  const dispatch = useDispatch()
  // LocalStor.clear()
  if (LocalStor.tasks) dispatch(setTasks(JSON.parse(LocalStor.tasks)))
  if (LocalStor.timer) dispatch(setTimer(JSON.parse(LocalStor.timer)))
  if (LocalStor.statisticsActive) dispatch(setStatisticsActive(JSON.parse(LocalStor.statisticsActive)))
  if (LocalStor.nowWeek) dispatch(setNowWeek(JSON.parse(LocalStor.nowWeek)))
  if (LocalStor.lastWeek) dispatch(setLastWeek(JSON.parse(LocalStor.lastWeek)))
  if (LocalStor.beforeLastWeek) dispatch(setBeforeLastWeek(JSON.parse(LocalStor.beforeLastWeek)))
  if (LocalStor.darkTheme) dispatch(changeTheme(JSON.parse(LocalStor.darkTheme)))
}

