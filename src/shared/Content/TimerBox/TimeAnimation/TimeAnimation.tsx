import React, { useEffect, useRef } from 'react';
import styles from './timeanimation.scss';

interface ITimeAnimation {
  time: number
  lastTime: number
  style: string
  second: boolean
}

export function TimeAnimation({time, lastTime, style, second}: ITimeAnimation) {
  let timeBot = lastTime
  let timeTop = time
  // let checkPosition: boolean | undefined = false
  // const ref = useRef<HTMLDivElement>(null)
  if (time === lastTime) {
    if (second) {
      if (time % 2) {
        if (time === 9) {
          timeBot = 0
        } else {
          timeBot = lastTime + 1
        }
        timeTop = time
      } else {
        timeTop = lastTime + 1
        timeBot = time
      }
    } else {
      if (time % 2) {
        timeBot = lastTime - 1
        timeTop = time
      } else {
        if (time === 0) {
          timeTop = 9
        } else {
          timeTop = lastTime - 1
        }
        timeBot = time
      }
    }
  } else {
    if (time % 2) {
      timeBot = lastTime
      timeTop = time
    } else {
      timeTop = lastTime
      timeBot = time
    }
  }

    // checkPosition = ref.current?.classList.contains(styles.up)
    // console.log(checkPosition)

    // if (checkPosition) {
    //   timeBot = lastTime
    //   timeTop = time
    // } else {
    //   timeTop = lastTime
    //   timeBot = time
    // }

    // if (time !== lastTime) checkPosition = !checkPosition

  return (
    <div className={styles.container}>
      <div className={`${styles.animationBox} ${time % 2 ? styles.down : styles.up}`}>
        <div className={`${styles.top} ${style}`}>{timeTop}</div>
        <div className={`${styles.bot} ${style}`}>{timeBot}</div>
      </div>
    </div>
  );
}
