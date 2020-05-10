import tinycolor from 'tinycolor2'
export default (id, date) => {
  const firstColor = `#${id.slice(-2).toString(16)}${new Date(date)
    .getMinutes()
    .toString(16)}${new Date(date).getSeconds().toString(16)}`
  const secondColor = tinycolor(firstColor)
    .darken(10)
    .toHexString()

  return { firstColor, secondColor }
}
