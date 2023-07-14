import React, { ChangeEvent, MouseEventHandler } from 'react';
import styles from './slider.scss';

interface ISlider {
  state: boolean
  onClick: () => void
}

export function Slider({state, onClick}: ISlider) {
  return (
    <button className={`${styles.sliderBox} ${state ? styles.checed : ''}`} onClick={onClick} type='button'>
      <div className={styles.slider}></div>
    </button>
  );
}
