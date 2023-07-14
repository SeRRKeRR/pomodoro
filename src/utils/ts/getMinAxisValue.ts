export function getMinAxisValue(value: number) {
  let thisValue = Math.floor(value / 60)
  if (thisValue < 25) thisValue = 25
  return Math.ceil( thisValue / 5 / 25) * 25
}
