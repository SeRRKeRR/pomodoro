import { getNoun } from "./getNoun"

export function getTime(time: number) {
  const minutes = time % 60
  const hours = (time - minutes) / 60
  return [hours, minutes]
}

export function getHoursMinutes(time: number) {
  const [hours, minutes] = getTime(time)

  if (hours === 0) {
    return `${minutes} ${getNoun(minutes, 'минуты', 'минут', 'минут')}`
  } else {
    return `${hours} ${getNoun(hours, 'часа', 'часов', 'часов')} ${minutes} ${getNoun(minutes, 'минуты', 'минут', 'минут')}`
  }
}

export function getHM(time: number) {
  const [hours, minutes] = getTime(time)

  if (hours === 0) {
    return `${minutes}м`
  } else {
    return `${hours}ч ${minutes}м`
  }
}

export function getHoursMin(time: number) {
  const [hours, minutes] = getTime(time)

  if (hours === 0) {
    return `${minutes} мин`
  } else {
    return `${hours} ${getNoun(hours, 'час', 'часа', 'часов')} ${minutes} мин`
  }
}

export function getMS(time: number) {
  const [minutes, seconds] = getTime(time)

  if (minutes === 0) {
        if (seconds >= 10) {
      return `00:${seconds}`
    } else {
      return `00:0${seconds}`
    }
  } else if (minutes < 10) {
        if (seconds >= 10) {
      return `0${minutes}:${seconds}`
    } else {
      return `0${minutes}:0${seconds}`
    }
  } else {
        if (seconds >= 10) {
      return `${minutes}:${seconds}`
    } else {
      return `${minutes}:0${seconds}`
    }
  }
}

export function getHMin(time: number) {
  const [hours, minutes] = getTime(time)

  if (hours) {
    return `${hours} ч ${minutes} мин`
  } else {
    return `${minutes} мин`
  }
}
