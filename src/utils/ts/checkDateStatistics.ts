import { useDispatch } from "react-redux";
import { changeBeforeLastWeekStorage, changeLastWeekStorage, changeNowWeekStorage } from "../../localStorage/localStorageChange";
import { getLastWeekState, getNowWeekState } from "../../localStorage/localStorageGet";
import { setBeforeLastWeek, setLastWeek, setNowWeek } from "../../store/reduser";
import { getNowWeek } from "./nowDate";
import { setWeekInitialState } from "./setWeekInitialState";

export function checkDateStatistics() {
  const nowWeekState = getNowWeekState()
  const lastWeekState = getLastWeekState()
  const weekNumber = nowWeekState.weekNumber
  const dispatch = useDispatch()
  const nowWeekNumber = getNowWeek()

  if (weekNumber && nowWeekNumber !== weekNumber) {
    const initialStateOne = setWeekInitialState(nowWeekNumber)
    const initialStateTwo = setWeekInitialState(nowWeekNumber - 1)
    const initialStateThree = setWeekInitialState(nowWeekNumber - 2)

    if (nowWeekNumber - weekNumber === 1) {
      dispatch(setBeforeLastWeek(lastWeekState))
      changeBeforeLastWeekStorage(lastWeekState)
      dispatch(setLastWeek(nowWeekState))
      changeLastWeekStorage(nowWeekState)
      dispatch(setNowWeek(initialStateOne))
      changeNowWeekStorage(initialStateOne)
    } else if (nowWeekNumber - weekNumber === 2) {
      dispatch(setBeforeLastWeek(nowWeekState))
      changeBeforeLastWeekStorage(nowWeekState)
      dispatch(setLastWeek(initialStateTwo))
      changeLastWeekStorage(initialStateTwo)
      dispatch(setNowWeek(initialStateOne))
      changeNowWeekStorage(initialStateOne)
    } else {
      dispatch(setBeforeLastWeek(initialStateThree))
      changeBeforeLastWeekStorage(initialStateThree)
      dispatch(setLastWeek(initialStateTwo))
      changeLastWeekStorage(initialStateTwo)
      dispatch(setNowWeek(initialStateOne))
      changeNowWeekStorage(initialStateOne)
    }
  }
}
