import React from 'react';
import styles from './btntodomenu.scss';

interface IMenuButtonProps {
  onClick?: () => void
}

export function BtnToDoMenu({onClick}: IMenuButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </button>
  );
}
