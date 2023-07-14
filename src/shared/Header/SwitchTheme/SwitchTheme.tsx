import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeStorage } from '../../../localStorage/localStorageChange';
import { changeTheme, RootState } from '../../../store/reduser';
import { changeThemeHTML } from '../../../utils/ts/changeThemeHTML';
import styles from './switchtheme.scss';

export function SwitchTheme() {
  const darkTheme = useSelector<RootState, boolean>(state => state.darkTheme)
  const dispatch = useDispatch()
  const handleChange = () => {
    changeThemeHTML(!darkTheme)
    dispatch(changeTheme(!darkTheme))
    changeThemeStorage(!darkTheme)
  }

  return (
    <button className={styles.switchBtn} onClick={handleChange}>
      {darkTheme && <>
        <svg className={styles.sun} xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6V3M8.929 8.929L6.808 6.808M6 16H3m13 13v-3m9.192-.808l-2.121-2.12M29 16h-3M8.929 23.071l-2.121 2.121M25.192 6.808l-2.12 2.121M22 16a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"/>
        </svg>
      </>}
      {!darkTheme && <>
        <svg className={styles.moon} xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2C9 2 3 7 3 15s6 14 14 14s13-6 13-11C19 25 7 13 14 2Z"/>
        </svg>
      </>}
      <span className={styles.text}>{darkTheme ? 'Светлая тема' : 'Тёмная тема'}</span>
    </button>
  );
}
