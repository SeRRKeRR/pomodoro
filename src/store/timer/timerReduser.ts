import { Reducer } from "react";
import { ActionCreator, AnyAction } from "redux";

export type TimerState = {
  time: number
  lastTime: number
  active: boolean
  timeout: NodeJS.Timeout
  start: boolean
  work: boolean
  timerCNT: number
  pomodoro: number
  rest: number
  restBig: number
  CNT: number
}

export type TimerSettingsProps = {
  pomodoro: number
  rest: number
  restBig: number
  CNT: number
}

export const INCREASE_TIMEPOMODORO = 'INCREASE_TIMEPOMODORO'
export const CHANGE_ACTIVEPOMODORO = 'CHANGE_ACTIVEPOMODORO'
export const SET_TIMEOUT = 'SET_TIMEOUT'
export const CHANGE_STARTPOMODORO = 'CHANGE_STARTPOMODORO'
export const CHANGE_WORK = 'CHANGE_WORK'
export const CHANGE_TIMERCNT = 'CHANGE_TIMERCNT'
export const CHANGE_TIMERSETTINGS = 'CHANGE_TIMERSETTINGS'
export const DECREASE_TIME = 'DECREASE_TIME'

type IncreaseTimePomodoroAction = {
  type: typeof INCREASE_TIMEPOMODORO
  time: number
}

type DecreaseTimeAction = {
  type: typeof DECREASE_TIME
}

type ChangeStartPomodoroAction = {
  type: typeof CHANGE_STARTPOMODORO
  start: boolean
}

type ChangeActivePomodoroAction = {
  type: typeof CHANGE_ACTIVEPOMODORO
  active: boolean
}

type SetTimeoutAction = {
  type: typeof SET_TIMEOUT
  timeout: NodeJS.Timeout
}

type ChangeWorkPomodoroAction = {
  type: typeof CHANGE_WORK
  work: boolean
}

type ChangeTimerCNTAction = {
  type: typeof CHANGE_TIMERCNT
}

type ChangeTimerSettings = {
  type: typeof CHANGE_TIMERSETTINGS
  pomodoro: number
  rest: number
  restBig: number
  CNT: number
}

export type TimerAction = IncreaseTimePomodoroAction
  | ChangeStartPomodoroAction
  | SetTimeoutAction
  | ChangeActivePomodoroAction
  | ChangeWorkPomodoroAction
  | ChangeTimerCNTAction
  | ChangeTimerSettings
  | DecreaseTimeAction

export const increaseTimePomodoro: ActionCreator<AnyAction> = (time: number) => ({
  type: INCREASE_TIMEPOMODORO,
  time: time
})

export const changeStartPomodoro: ActionCreator<AnyAction> = (start: boolean) => ({
  type: CHANGE_STARTPOMODORO,
  start: start
})

export const changeActivePomodoro: ActionCreator<AnyAction> = (active: boolean) => ({
  type: CHANGE_ACTIVEPOMODORO,
  active: active
})

export const setTimeoutPomodoro: ActionCreator<AnyAction> = (timeout: NodeJS.Timeout) => ({
  type: SET_TIMEOUT,
  timeout: timeout
})

export const changeWorkPomodoro: ActionCreator<AnyAction> = (work: boolean) => ({
  type: CHANGE_WORK,
  work: work
})

export const changeTimerCNTPomodoro: ActionCreator<AnyAction> = () => ({
  type: CHANGE_TIMERCNT
})

export const decreaseTime: ActionCreator<AnyAction> = () => ({
  type: DECREASE_TIME
})

export const changeTimerSettings: ActionCreator<AnyAction> = (settings: TimerSettingsProps) => ({
  type: CHANGE_TIMERSETTINGS,
  pomodoro: settings.pomodoro,
  rest: settings.rest,
  restBig: settings.restBig,
  CNT: settings.CNT
})

export const timerReduser: Reducer<TimerState, TimerAction> = (state, action) => {
  switch (action.type) {
    case DECREASE_TIME:
      return {
        ...state,
        lastTime: state.time,
        time: --state.time
      }
    case INCREASE_TIMEPOMODORO:
      return {
        ...state,
        lastTime: state.time,
        time: action.time
      }
    case CHANGE_STARTPOMODORO:
      return {
        ...state,
        start: action.start
      }
    case CHANGE_ACTIVEPOMODORO:
      return {
        ...state,
        active: action.active
      }
    case SET_TIMEOUT:
      return {
        ...state,
        timeout: action.timeout
      }
    case CHANGE_WORK:
      let useTimeTimer = state.pomodoro
      if (!action.work) {
        if (state.timerCNT >= state.CNT || state.timerCNT === 0) {
          useTimeTimer = state.restBig
        } else {
          useTimeTimer = state.rest
        }
      }
      return {
        ...state,
        lastTime: state.time,
        work: action.work,
        time: useTimeTimer
      }
    case CHANGE_TIMERCNT:
      let cnt = state.timerCNT
      if (cnt < state.CNT) {
        cnt++
      } else {
        cnt = 0
      }
      return {
        ...state,
        timerCNT: cnt
      }
    case CHANGE_TIMERSETTINGS:
      let time = state.time
      if (!state.active && state.work) time = action.pomodoro
      return {
        ...state,
        pomodoro: action.pomodoro,
        rest: action.rest,
        restBig: action.restBig,
        CNT: action.CNT,
        lastTime: state.time,
        time: time
      }
    default:
      return state
  }
}
