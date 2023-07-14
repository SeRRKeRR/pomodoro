import { ActionCreator, AnyAction, Reducer } from "redux"
import { getNowWeek } from "../utils/ts/nowDate"
import { setWeekInitialState } from "../utils/ts/setWeekInitialState"
import { StatisticsActiveState, StatisticsActions, CHANGE_DAY, CHANGE_WEEK, statisticsActiveReduser } from "./statisticsActive/statisticsActivereduser"
import { CHANGE_ACTIVEPOMODORO, CHANGE_STARTPOMODORO, CHANGE_TIMERCNT, CHANGE_TIMERSETTINGS, CHANGE_WORK, DECREASE_TIME, INCREASE_TIMEPOMODORO, SET_TIMEOUT, TimerAction, timerReduser, TimerState } from "./timer/timerReduser"
import { CHANGE_TIMEWORK, CHANGE_TIMEPAUSE, CHANGE_STOPS } from "./weekStatistics/dayStatistics/dayStatisticsReduser"
import { CHANGE_WEEKNUMBER, WeekStatisticsAction, weekStatisticsReduser, WeekStatisticsState } from "./weekStatistics/weekStatisticsReduser"

export type ITask = {
  task: string,
  pomodoro: number,
  id: string
}

export type RootState = {
  timer: TimerState
  tasks: ITask[]
  statisticsActive: StatisticsActiveState
  nowWeek: WeekStatisticsState
  lastWeek: WeekStatisticsState
  beforeLastWeek: WeekStatisticsState
  newTaskAdd: boolean
  darkTheme: boolean
}

const CHANGE_NEWTASKADD = 'CHANGE_NEWTASKADD'

const CHANGE_THEME = 'CHANGE_THEME'

const UPDATE_TASKS = 'UPDATE_TASKS'
const DEL_TASK = 'DEL_TASK'
const INCREASE_POMODORO = 'INCREASE_POMODORO'
const DECREASE_POMODORO = 'DECREASE_POMODORO'
const EDIT_TASK = 'EDIT_TASK'

const SET_TIMER = 'SET_TIMER'
const SET_TASKS = 'SET_TASKS'
const SET_STATISTICS = 'SET_STATISTICS'
const SET_NOWWEEK = 'SET_NOWWEEK'
const SET_LASTWEEK = 'SET_LASTWEEK'
const SET_BEFORELASTWEEK = 'SET_BEFORELASTWEEK'

const nowWeekDate = getNowWeek()

const initialState: RootState = {
  newTaskAdd: false,
  darkTheme: false,

  timer: {
    time: 1500,
    lastTime: 1500,
    start: false,
    timeout: setTimeout(() => {}, 1),
    active: false,
    work: true,
    timerCNT: 0,
    pomodoro: 1500,
    rest: 300,
    restBig: 1800,
    CNT: 4
  },

  tasks: [],
  statisticsActive: {
    day: 'monday',
    week: 'nowWeek'
  },

  nowWeek: setWeekInitialState(nowWeekDate),
  lastWeek: setWeekInitialState(nowWeekDate - 1),
  beforeLastWeek: setWeekInitialState(nowWeekDate - 2)
}

type ChangeThemeAction = {
  type: typeof CHANGE_THEME
  darkTheme: boolean
}

type ChangeNewTaskAddAction = {
  type: typeof CHANGE_NEWTASKADD
  newTaskAdd: boolean
}

type SetTasksAction = {
  type: typeof SET_TASKS
  tasks: ITask[]
}

type UpdateTasksAction = {
  type: typeof UPDATE_TASKS
  task: ITask
}

type DelTaskAction = {
  type: typeof DEL_TASK
  id: string
}

type IncreasePomodoroAction = {
  type: typeof INCREASE_POMODORO
  id: string
}

type DecreasePomodoroAction = {
  type: typeof DECREASE_POMODORO
  id: string
}

type EditTaskAction = {
  type: typeof EDIT_TASK
  task: ITask
}

type SetTimerAction = {
  type: typeof SET_TIMER
  timer: TimerState
}

type SetStatisticsActiveAction = {
  type: typeof SET_STATISTICS
  statisticsActive: StatisticsActiveState
}

type SetNowWeekAction = {
  type: typeof SET_NOWWEEK
  nowWeek: WeekStatisticsState
}

type SetLastWeekAction = {
  type: typeof SET_LASTWEEK
  lastWeek: WeekStatisticsState
}

type SetBeforeLastWeekAction = {
  type: typeof SET_BEFORELASTWEEK
  beforeLastWeek: WeekStatisticsState
}

type MyAction = UpdateTasksAction
  | ChangeNewTaskAddAction
  | DelTaskAction
  | IncreasePomodoroAction
  | DecreasePomodoroAction
  | EditTaskAction
  | TimerAction
  | SetTimerAction
  | SetTasksAction
  | StatisticsActions
  | WeekStatisticsAction
  | SetStatisticsActiveAction
  | SetNowWeekAction
  | SetLastWeekAction
  | SetBeforeLastWeekAction
  | ChangeThemeAction

export const changeNewTaskAdd: ActionCreator<AnyAction> = (newTaskAdd: boolean) => ({
  type: CHANGE_NEWTASKADD,
  newTaskAdd: newTaskAdd
})

export const changeTheme: ActionCreator<AnyAction> = (darkTheme: boolean) => ({
  type: CHANGE_THEME,
  darkTheme: darkTheme
})

export const setTasks: ActionCreator<AnyAction> = (tasks: ITask[]) => ({
  type: SET_TASKS,
  tasks: tasks
})

export const updateTask: ActionCreator<AnyAction> = (task: ITask) => ({
  type: UPDATE_TASKS,
  task: task
})

export const delTask: ActionCreator<AnyAction> = (id: string) => ({
  type: DEL_TASK,
  id: id
})

export const increasePomodoro: ActionCreator<AnyAction> = (id: string) => ({
  type: INCREASE_POMODORO,
  id: id
})

export const decreasePomodoro: ActionCreator<AnyAction> = (id: string) => ({
  type: DECREASE_POMODORO,
  id: id
})

export const editTask: ActionCreator<AnyAction> = (task: ITask) => ({
  type: EDIT_TASK,
  task: task
})

export const setTimer: ActionCreator<AnyAction> = (timer: TimerState) => ({
  type: SET_TIMER,
  timer: timer
})

export const setStatisticsActive: ActionCreator<AnyAction> = (statisticsActive: StatisticsActiveState) => ({
  type: SET_STATISTICS,
  statisticsActive: statisticsActive
})

export const setNowWeek: ActionCreator<AnyAction> = (nowWeek: WeekStatisticsState) => ({
  type: SET_NOWWEEK,
  nowWeek: nowWeek
})

export const setLastWeek: ActionCreator<AnyAction> = (lastWeek: WeekStatisticsState) => ({
  type: SET_LASTWEEK,
  lastWeek: lastWeek
})

export const setBeforeLastWeek: ActionCreator<AnyAction> = (beforeLastWeek: WeekStatisticsState) => ({
  type: SET_BEFORELASTWEEK,
  beforeLastWeek: beforeLastWeek
})

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEWTASKADD:
      return {
        ...state,
        newTaskAdd: action.newTaskAdd
      }
    case CHANGE_THEME:
      return {
        ...state,
        darkTheme: action.darkTheme
      }
    case UPDATE_TASKS:
      const newTasks = state.tasks.concat(action.task)
      return {
        ...state,
        tasks: newTasks
      }
    case DEL_TASK:
      const newT = state.tasks.filter((task) => {
        if (task.id !== action.id) return true
      })
      return {
        ...state,
        tasks: newT
      }
    case INCREASE_POMODORO:
      const newList = state.tasks.map((task) => {
        if (task.id === action.id) task.pomodoro++
        return task
      })
      return {
        ...state,
        tasks: newList
      }
    case DECREASE_POMODORO:
      const newL = state.tasks.map((task) => {
        if (task.id === action.id) task.pomodoro--
        return task
      })
      return {
        ...state,
        tasks: newL
      }
    case EDIT_TASK:
      const newLi = state.tasks.map((task) => {
        if (task.id === action.task.id) task.task = action.task.task
        return task
      })
      return {
        ...state,
        tasks: newLi
      }
    case SET_TIMER:
      return {
        ...state,
        timer: action.timer
      }
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks
      }
    case DECREASE_TIME:
    case INCREASE_TIMEPOMODORO:
    case CHANGE_STARTPOMODORO:
    case SET_TIMEOUT:
    case CHANGE_ACTIVEPOMODORO:
    case CHANGE_WORK:
    case CHANGE_TIMERCNT:
    case CHANGE_TIMERSETTINGS:
      return {
        ...state,
        timer: timerReduser(state.timer, action)
      }
    case CHANGE_DAY:
    case CHANGE_WEEK:
      return {
        ...state,
        statisticsActive: statisticsActiveReduser(state.statisticsActive, action)
      }
    case CHANGE_WEEKNUMBER:
    case CHANGE_TIMEWORK:
    case CHANGE_TIMEPAUSE:
    case CHANGE_STOPS:
      return {
        ...state,
        nowWeek: weekStatisticsReduser(state.nowWeek, action)
      }
    case SET_STATISTICS:
      return {
        ...state,
        statisticsActive: action.statisticsActive
      }
    case SET_NOWWEEK:
      return {
        ...state,
        nowWeek: action.nowWeek
      }
    case SET_LASTWEEK:
      return {
        ...state,
        lastWeek: action.lastWeek
      }
    case SET_BEFORELASTWEEK:
      return {
        ...state,
        beforeLastWeek: action.beforeLastWeek
      }
    default:
      return state
  }
}
