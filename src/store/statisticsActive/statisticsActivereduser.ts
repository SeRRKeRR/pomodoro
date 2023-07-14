import { Reducer } from "react";
import { ActionCreator, AnyAction } from "redux";

export type StatisticsActiveState = {
  day: string
  week: string
}

export const CHANGE_DAY = 'CHANGE_DAY'
export const CHANGE_WEEK = 'CHANGE_WEEK'

type ChangeDayAction = {
  type: typeof CHANGE_DAY,
  day: string
}

type ChangeWeekAction = {
  type: typeof CHANGE_WEEK,
  week: string
}

export type StatisticsActions = ChangeDayAction
  | ChangeWeekAction

export const changeDay: ActionCreator<AnyAction> = (day: string) => ({
  type: CHANGE_DAY,
  day: day
})

export const changeWeek: ActionCreator<AnyAction> = (week: string) => ({
  type: CHANGE_WEEK,
  week: week
})

export const statisticsActiveReduser: Reducer<StatisticsActiveState, StatisticsActions> = (state, action) => {
  switch (action.type) {
    case CHANGE_DAY:
      return {
        ...state,
        day: action.day
      }
    case CHANGE_WEEK:
      return {
        ...state,
        week: action.week
      }
    default:
      return state
  }
}
