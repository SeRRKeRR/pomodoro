import React from 'react';
import styles from './burgerbtn.scss';

interface IBurgerBtnProps {
  isDropDown: () => void
  isOpen: boolean
}

export function BurgerBtn({isDropDown, isOpen}: IBurgerBtnProps) {
  return (
    <button className={`${styles.btn} ${isOpen ? styles.open : ''}`} onClick={isDropDown}>
      <div className={styles.lineOne}/>
      <div className={styles.lineTwo}/>
      <div className={styles.lineThree}/>
    </button>
  );
}
