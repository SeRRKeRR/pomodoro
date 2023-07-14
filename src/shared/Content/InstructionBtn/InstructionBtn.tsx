import React from 'react';
import styles from './instructionbtn.scss';

interface IInstructionBtn {
  isDropdown: () => void
}

export function InstructionBtn({isDropdown}: IInstructionBtn) {
  return (
    <button className={styles.btn} onClick={isDropdown}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
        <g fill="none" strokeLinecap="round" strokeWidth="4"><rect width="40" height="32" x="4" y="8" strokeLinejoin="round" rx="2"/>
          <path strokeLinejoin="round" d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6H4v-6Z"/>
          <path d="m25 23l-2 11"/>
          <path strokeLinejoin="round" d="m31 23l6 5l-6 6M17 23l-6 5l6 6"/>
        </g>
      </svg>
      <span className={styles.text}>Инструкция</span>
    </button>
  );
}
