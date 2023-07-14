import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BtnHome } from './BtnHome';
import { BtnStatistics } from './BtnStatistics';
import { BurgerBtn } from './BurgerBtn';
import styles from './header.scss';
import { Logo } from './Logo';
import { SwitchTheme } from './SwitchTheme';

export function Header() {
  const ref = useRef<HTMLDivElement>(null)
  const [ dropdown, setDropdown ] = useState(false)
  const [ timer, setTimer ] = useState(setTimeout(() => {}, 1))

  const isDropdown = () => {
    clearTimeout(timer)
    if (ref.current) {
      if (dropdown) {
        const timeOut = setTimeout(() => ref.current?.classList.remove(styles.open), 300)
        setTimer(timeOut)
      } else {
        ref.current?.classList.add(styles.open)
      }
      setTimeout(() => ref.current?.classList.toggle(styles.animation), 1)
      setDropdown(!dropdown)
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
      <Logo/>
      <BurgerBtn isDropDown={isDropdown} isOpen={dropdown}/>
      <div className={styles.btnBox} ref={ref} onClick={isDropdown}>
        <SwitchTheme/>
        <Routes>
          <Route path='/pomodoro' element={<BtnStatistics/>}/>
          <Route path='/statistics' element={<BtnHome/>}/>
        </Routes>
      </div>
      </div>
    </div>
  );
}
