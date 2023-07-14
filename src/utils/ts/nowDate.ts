import e from "express";
import { isInteger } from "formik";
import { typeDay } from "../../store/weekStatistics/dayStatistics/dayStatisticsReduser";

export function getNowDay() {
  const currentdate = new Date();
  const day = currentdate.getDay()
  let nowDay: typeDay = 'monday'
  if (day === 1) {
    nowDay = 'monday'
  } else if (day === 2) {
    nowDay = 'tuesday'
  } else if (day === 3) {
    nowDay = 'wednesday'
  } else if (day === 4) {
    nowDay = 'thursday'
  } else if (day === 5) {
    nowDay = 'friday'
  } else if (day === 6) {
    nowDay = 'saturday'
  } else if (day === 0) {
    nowDay = 'sanday'
  }
  return nowDay
}

export function getFirstDayOfWeek(dayNumber: number) {
  const x = dayNumber - 1
  if (x === 0) {
    return 7
  } else if (x === -1) {
    return 6
  } else {
    return x
  }
}

export function getNowWeek() {
  const currentdate = new Date()
  const oneJan = new Date(currentdate.getFullYear(), 0, 1)
  const numberDay = (Number(currentdate) - Number(oneJan)) / (24 * 60 * 60 * 1000)
  const result = Math.ceil((numberDay + getFirstDayOfWeek(oneJan.getDay())) / 7)
  return result
}
