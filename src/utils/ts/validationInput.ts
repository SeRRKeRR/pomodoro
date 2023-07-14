import { TimerSettingsProps } from "../../store/timer/timerReduser"

export interface IValidationInput {
  value: string
  start: number
  stop: number
}

export interface IValidationSubmitForm extends TimerSettingsProps {
  fPomodoro: (value: boolean) => void
  fRest: (value: boolean) => void
  fRestBig: (value: boolean) => void
  fCNT: (value: boolean) => void
}

export function validationInput({value, start, stop}: IValidationInput) {
  let valid = true
  const numberValue = Number(value)
  if (!numberValue || numberValue > stop || numberValue < start) valid = false
  return valid
}

export const banString = /[\D]/g

export const timePomodoroMax = 60
export const timePomodoroMin = 5
export const timeRestMax = 15
export const timeRestMin = 1
export const timeRestBigMax = 60
export const timeRestBigMin = 10
export const cntMax = 9
export const cntMin = 2

export function validationSubmitForm({
  pomodoro,
  rest,
  restBig,
  CNT,
  fCNT,
  fPomodoro,
  fRest,
  fRestBig
}: IValidationSubmitForm) {
  let response = true

  if (!pomodoro || pomodoro > timePomodoroMax || pomodoro <timePomodoroMin) {
    fPomodoro(false)
    response = false
  } else {
    fPomodoro(true)
  }

  if (!rest || rest > timeRestMax || rest < timeRestMin) {
    fRest(false)
    response = false
  } else {
    fRest(true)
  }

  if (!restBig || restBig > timeRestBigMax || restBig < timeRestBigMin) {
    fRestBig(false)
    response = false
  } else {
    fRestBig(true)
  }

  if (!CNT || CNT > cntMax || CNT < cntMin) {
    fCNT(false)
    response = false
  } else {
    fCNT(true)
  }

  return response
}
