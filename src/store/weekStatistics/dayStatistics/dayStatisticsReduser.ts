import { Reducer } from "react";
import { ActionCreator, AnyAction } from "redux";

export type typeDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sanday'

export type DayState = {
  timeWork: number
  timePause: number
  stops: number
}

export const CHANGE_TIMEWORK = 'CHANGE_TIMEWORK'
export const CHANGE_TIMEPAUSE = 'CHANGE_TIMEPAUSE'
export const CHANGE_STOPS = 'CHANGE_STOPS'

type ChangeTimeWorkAction = {
  type: typeof CHANGE_TIMEWORK,
  day: typeDay
}

type ChangeTimePauseAction = {
  type: typeof CHANGE_TIMEPAUSE,
  day: typeDay
}

type ChangeStopsAction = {
  type: typeof CHANGE_STOPS,
  day: typeDay
}

export type DayStatisticsAction = ChangeTimeWorkAction
  | ChangeTimePauseAction
  | ChangeStopsAction

export const changeTimeWork: ActionCreator<AnyAction> = (day: typeDay) => ({
  type: CHANGE_TIMEWORK,
  day: day
})

export const changeTimePause: ActionCreator<AnyAction> = (day: typeDay) => ({
  type: CHANGE_TIMEPAUSE,
  day: day
})

export const changeStops: ActionCreator<AnyAction> = (day: typeDay) => ({
  type: CHANGE_STOPS,
  day: day
})

export const dayStatisticsReduser: Reducer<DayState, DayStatisticsAction> = (state, action) => {
  switch (action.type) {
    case CHANGE_TIMEWORK:
      return {
        ...state,
        timeWork: ++state.timeWork
      }
    case CHANGE_TIMEPAUSE:
      return {
        ...state,
        timePause: ++state.timePause
      }
    case CHANGE_STOPS:
      return {
        ...state,
        stops: ++state.stops
      }
    default:
      return state
  }
}
