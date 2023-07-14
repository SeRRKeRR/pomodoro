export function getHeightAxis(maxTime: number, thisTime: number) {
  return Math.floor(thisTime / maxTime * 100)
}
