interface ISetActiveStartPauseProps {
  active: boolean
  start: boolean
  work: boolean
  styles: {[key: string]: string}
}

export function setActiveStartPause({start, active, styles, work}: ISetActiveStartPauseProps) {
  let styleElement

  if (!active && work) {
    styleElement = styles.NoActive
  } else {
    if (start || !work) {
      styleElement = styles.Start
    } else {
      styleElement = styles.Pause
    }
  }

  return styleElement
}
