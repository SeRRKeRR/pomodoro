import { Reducer } from "react";
import { ActionCreator, AnyAction } from "redux";
import { CHANGE_STOPS, CHANGE_TIMEPAUSE, CHANGE_TIMEWORK, DayState, DayStatisticsAction, dayStatisticsReduser } from "./dayStatistics/dayStatisticsReduser";

export type WeekStatisticsState = {
  weekNumber?: number
  monday: DayState
  tuesday: DayState
  wednesday: DayState
  thursday: DayState
  friday: DayState
  saturday: DayState
  sanday: DayState
}

export const CHANGE_WEEKNUMBER = 'CHANGE_WEEKNUMBER'

type ChangeWeekNumberAction = {
  type: typeof CHANGE_WEEKNUMBER,
  weekNumber: number
}

export type WeekStatisticsAction = ChangeWeekNumberAction
  | DayStatisticsAction

export const ChangeWeekNumberAction: ActionCreator<AnyAction> = (weekNumber: number) => ({
  type: typeof CHANGE_WEEKNUMBER,
  weekNumber: weekNumber
})

export const weekStatisticsReduser: Reducer<WeekStatisticsState, WeekStatisticsAction> = (state, action) => {
  switch (action.type) {
    case CHANGE_WEEKNUMBER:
      return {
        ...state,
        weekNumber: action.weekNumber
      }
    case CHANGE_TIMEWORK:
    case CHANGE_TIMEPAUSE:
    case CHANGE_STOPS:
      if (action.day === 'monday') {
        return {
          ...state,
          monday: dayStatisticsReduser(state.monday, action)
        }
      } else if (action.day === 'tuesday') {
        return {
          ...state,
          tuesday: dayStatisticsReduser(state.tuesday, action)
        }
      } else if (action.day === 'wednesday') {
        return {
          ...state,
          wednesday: dayStatisticsReduser(state.wednesday, action)
        }
      } else if (action.day === 'thursday') {
        return {
          ...state,
          thursday: dayStatisticsReduser(state.thursday, action)
        }
      } else if (action.day === 'friday') {
        return {
          ...state,
          friday: dayStatisticsReduser(state.friday, action)
        }
      } else if (action.day === 'saturday') {
        return {
          ...state,
          saturday: dayStatisticsReduser(state.saturday, action)
        }
      } else if (action.day === 'sanday') {
        return {
          ...state,
          sanday: dayStatisticsReduser(state.sanday, action)
        }
      }
    default:
      return state
  }
}
