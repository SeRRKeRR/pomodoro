import React from 'react';
import { useSelector } from 'react-redux';
import { changeNowWeekStorage, changeLastWeekStorage, changeBeforeLastWeekStorage } from '../localStorage/localStorageChange';
import { localStorageSetState } from '../localStorage/localStorageSetState';
import { RootState } from '../store/reduser';
import { changeThemeHTML } from '../utils/ts/changeThemeHTML';
import { getNowWeek } from '../utils/ts/nowDate';
import { setWeekInitialState, firstWeek, secondWeek, thirdWeek } from '../utils/ts/setWeekInitialState';
import styles from './layout.scss';

interface ILayoutProps {
	children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  // changeNowWeekStorage(setWeekInitialState(getNowWeek(), firstWeek))
  // changeLastWeekStorage(setWeekInitialState(getNowWeek() - 1, secondWeek))
  // changeBeforeLastWeekStorage(setWeekInitialState(getNowWeek() - 2, thirdWeek))
  localStorageSetState()
  const darkTheme = useSelector<RootState, boolean>(state => state.darkTheme)
  changeThemeHTML(darkTheme)

  return (
    <div className={styles.layout}>
      {children}
		</div>
  );
}
