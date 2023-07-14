import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTimerStorage } from '../../../../localStorage/localStorageChange';
import { RootState } from '../../../../store/reduser';
import { changeTimerSettings, TimerState } from '../../../../store/timer/timerReduser';
import { useClose } from '../../../../utils/hooks/useClose';
import { useModalHeight } from '../../../../utils/hooks/useModalHeight';
import { notificationToggle, useNotificationApi } from '../../../../utils/hooks/useNotificationPermission';
import { sendNotification } from '../../../../utils/ts/sendNotification';
import { banString, cntMax, cntMin, timePomodoroMax, timePomodoroMin, timeRestBigMax, timeRestBigMin, timeRestMax, timeRestMin, validationInput, validationSubmitForm } from '../../../../utils/ts/validationInput';
import { Slider } from './Slider';
import styles from './timersettings.scss';

interface ITimerSettingsProps {
  onClose: () => void
  set: boolean
}

export function TimerSettings({onClose, set}: ITimerSettingsProps) {

  // Notification.requestPermission(function(permission){
  //   // переменная permission содержит результат запроса
  //   console.log('Результат запроса прав:', permission);
  //   });

  const dispatch = useDispatch()
  const pomodoroTime = useSelector<RootState, number>(state => state.timer.pomodoro) / 60
  const restTime = useSelector<RootState, number>(state => state.timer.rest) / 60
  const restBigTime = useSelector<RootState, number>(state => state.timer.restBig) / 60
  const CNT = useSelector<RootState, number>(state => state.timer.CNT)
  const timer = useSelector<RootState, TimerState>(state => state.timer)

  const node = document.getElementById('modal-root')
  if (!node) return null

  const [ref] = useClose(onClose, set)

  const [setPomodoro, isSetPomodoro] = useState(`${pomodoroTime}`)
  const [setRest, isSetRest] = useState(`${restTime}`)
  const [setRestBig, isSetRestBig] = useState(`${restBigTime}`)
  const [setCnt, isSetCnt] = useState(`${CNT}`)
  const [setNotice, isSetNotice] = useState(false)
  const [setCansal, isSetCansel] = useState(false)

  const [setValidPomodoro, isSetValidPomodoro] = useState(true)
  const [setValidRest, isSetValidRest] = useState(true)
  const [setValidRestBig, isSetValidRestBig] = useState(true)
  const [setValidCnt, isSetValidCnt] = useState(true)

  function handleChangePomodoro(e: ChangeEvent<HTMLInputElement>) {
    isSetPomodoro(e.target.value.replace(banString, ''))
  }

  function handleChangeRest(e: ChangeEvent<HTMLInputElement>) {
    isSetRest(e.target.value.replace(banString, ''))
  }

  function handleChangeRestBig(e: ChangeEvent<HTMLInputElement>) {
    isSetRestBig(e.target.value.replace(banString, ''))
  }

  function handleChangeCnt(e: ChangeEvent<HTMLInputElement>) {
    isSetCnt(e.target.value.replace(banString, ''))
  }

  function handleChangeNotice() {
    isSetNotice(!setNotice)

    //   Notification.requestPermission(function(permission){
    // // переменная permission содержит результат запроса
    // console.log('Результат запроса прав:', permission);
    // });
    // useNotificationApi()
    // if (!setNotice) {sendNotification('Уведомление', {})
    //   console.log('click')}
  }

  function handleBlurPomodoro(e: ChangeEvent<HTMLInputElement>) {
    isSetValidPomodoro(validationInput({value: e.target.value, start: timePomodoroMin, stop: timePomodoroMax}))
  }

  function handleBlurRest(e: ChangeEvent<HTMLInputElement>) {
    isSetValidRest(validationInput({value: e.target.value, start: timeRestMin, stop: timeRestMax}))
  }

  function handleBlurRestBig(e: ChangeEvent<HTMLInputElement>) {
    isSetValidRestBig(validationInput({value: e.target.value, start: timeRestBigMin, stop: timeRestBigMax}))
  }

  function handleBlurCnt(e: ChangeEvent<HTMLInputElement>) {
    isSetValidCnt(validationInput({value: e.target.value, start: cntMin, stop: cntMax}))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (setCansal) {
      onClose()
    } else {
      const pomodoro = Number(setPomodoro)
      const rest = Number(setRest)
      const restBig = Number(setRestBig)
      const CNT = Number(setCnt)

      const validForm = validationSubmitForm({
        pomodoro: pomodoro,
        rest: rest,
        restBig: restBig,
        CNT: CNT,
        fPomodoro: isSetValidPomodoro,
        fRest: isSetValidRest,
        fRestBig: isSetValidRestBig,
        fCNT: isSetValidCnt
      })

      if (validForm) {
        dispatch(changeTimerSettings({
          pomodoro: pomodoro * 60,
          rest: rest * 60,
          restBig: restBig * 60,
          CNT: CNT
        }))
        onClose()
      }
    }
  }

  const [ refWindow ] = useModalHeight()

  useEffect(() => {
    changeTimerStorage(timer)
  }, [pomodoroTime, restTime, restBigTime, CNT])

  return ReactDOM.createPortal((
    <div className={styles.window} ref={refWindow}>
      <div className={styles.container} ref={ref}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Длительность одного помидора
            <input className={`${styles.input} ${setValidPomodoro ? '' : styles.noValid}`} value={setPomodoro} onChange={handleChangePomodoro} onBlur={handleBlurPomodoro} type='text' placeholder={`Текущее значение ${Math.floor(pomodoroTime)} мин`}/>
          </label>
          <div className={`${styles.error} ${setValidPomodoro ? '' : styles.noValid}`}>{`Введите число минут от ${timePomodoroMin} до ${timePomodoroMax}`}</div>
          <label className={styles.label}>
            Длительность короткого перерыва
            <input className={`${styles.input} ${setValidRest ? '' : styles.noValid}`} value={setRest} onChange={handleChangeRest} onBlur={handleBlurRest} type='text' placeholder={`Текущее значение ${Math.floor(restTime)} мин`}/>
          </label>
          <div className={`${styles.error} ${setValidRest ? '' : styles.noValid}`}>{`Ввведите число минут от ${timeRestMin} до ${timeRestMax}`}</div>
          <label className={styles.label}>
            Длительность длинного перерыва
            <input className={`${styles.input} ${setValidRestBig ? '' : styles.noValid}`} value={setRestBig} onChange={handleChangeRestBig} onBlur={handleBlurRestBig} type='text' placeholder={`Текущее значение ${Math.floor(restBigTime)} мин`}/>
          </label>
          <div className={`${styles.error} ${setValidRestBig ? '' : styles.noValid}`}>{`Введите число минут от ${timeRestBigMin} до ${timeRestBigMax}`}</div>
          <label className={styles.label}>
            Частота длинного перерыва
            <input className={`${styles.input} ${setValidCnt ? '' : styles.noValid}`} value={setCnt} onChange={handleChangeCnt} onBlur={handleBlurCnt} type='text' placeholder={`Текущее значение 4`}/>
          </label>
          <div className={`${styles.error} ${setValidCnt ? '' : styles.noValid}`}>{`Введите число помидоров от ${cntMin} до ${cntMax}`}</div>
          <div className={styles.sliderContainer}>
            <span className={styles.sliderLabel}>Включить уведомления?</span>
            <Slider state={setNotice} onClick={handleChangeNotice}/>
          </div>
          <div className={styles.btnBox}>
            <button className={`${styles.btnSave} ${!setValidPomodoro || !setValidRest || !setValidRestBig || !setValidCnt ? styles.noValid : ''}`} type='submit'>Сохранить</button>
            <button className={styles.btnCansel} type='submit' onClick={() => isSetCansel(true)}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  ), node);
}
