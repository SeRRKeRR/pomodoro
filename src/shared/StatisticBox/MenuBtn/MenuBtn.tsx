import React from 'react';
import styles from './menubtn.scss';

interface IMenuBtnProps {
  text: string
  onClick?: () => void
  active: boolean
}

export function MenuBtn({onClick, text, active}: IMenuBtnProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <svg className={`${styles.svg} ${active ? styles.active : ''}`} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1L8 8L1 1" stroke="#B7280F" strokeWidth="2"/>
      </svg>
    </button>
  );
}
