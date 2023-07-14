import { WeekStatisticsState } from "../../store/weekStatistics/weekStatisticsReduser"

export function setWeekInitialState(weekDate: number, weekSate?: WeekStatisticsState) {
  let weekStateProcess = weekSate
  if (!weekStateProcess) weekStateProcess = initialWeek
  // console.log(weekStateProcess, 'weekState')
  weekStateProcess.weekNumber = weekDate
  // console.log(weekDate, 'weekDate')
  // console.log(weekStateProcess, 'weekStateProcess')
  return weekStateProcess
}

export const initialWeek = {
  monday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  },

  tuesday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  },

  wednesday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  },

  thursday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  },

  friday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  },

  saturday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  },

  sanday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  }
}

export const firstWeek = {
  monday: {
    timeWork: 10000,
    timePause: 1000,
    stops: 10
  },

  tuesday: {
    timeWork: 12000,
    timePause: 400,
    stops: 14
  },

  wednesday: {
    timeWork: 22000,
    timePause: 1000,
    stops: 18
  },

  thursday: {
    timeWork: 10000,
    timePause: 600,
    stops: 11
  },

  friday: {
    timeWork: 3000,
    timePause: 100,
    stops: 12
  },

  saturday: {
    timeWork: 19000,
    timePause: 1600,
    stops: 16
  },

  sanday: {
    timeWork: 0,
    timePause: 0,
    stops: 0
  }
}

export const secondWeek = {
  monday: {
    timeWork: 13000,
    timePause: 10000,
    stops: 14
  },

  tuesday: {
    timeWork: 14000,
    timePause: 11000,
    stops: 16
  },

  wednesday: {
    timeWork: 27000,
    timePause: 15000,
    stops: 24
  },

  thursday: {
    timeWork: 11000,
    timePause: 6000,
    stops: 18
  },

  friday: {
    timeWork: 22000,
    timePause: 10000,
    stops: 13
  },

  saturday: {
    timeWork: 18000,
    timePause: 11862,
    stops: 12
  },

  sanday: {
    timeWork: 15450,
    timePause: 11920,
    stops: 10
  }
}

export const thirdWeek = {
  monday: {
    timeWork: 11000,
    timePause: 15000,
    stops: 21
  },

  tuesday: {
    timeWork: 11000,
    timePause: 14000,
    stops: 19
  },

  wednesday: {
    timeWork: 16000,
    timePause: 19000,
    stops: 24
  },

  thursday: {
    timeWork: 14000,
    timePause: 16000,
    stops: 27
  },

  friday: {
    timeWork: 19000,
    timePause: 23000,
    stops: 29
  },

  saturday: {
    timeWork: 11000,
    timePause: 11862,
    stops: 18
  },

  sanday: {
    timeWork: 1545,
    timePause: 1192,
    stops: 2
  }
}
