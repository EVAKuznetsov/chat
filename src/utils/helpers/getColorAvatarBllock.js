import tinycolor from 'tinycolor2'
export default id => {
  const firstColor = `#${id.slice(-6).toString(16)}`
  const secondColor = tinycolor(firstColor)
    .darken(20)
    .toHexString()

  return { firstColor, secondColor }
}
