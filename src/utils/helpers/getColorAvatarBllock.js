import tinycolor from 'tinycolor2'
export default () => {
	const avatarsMask = ['#43c755e6', '#5d9cec', '#faad14', '#bfbfbf', '#f5222d33']
	const firstColor = avatarsMask[Math.floor(Math.random() * avatarsMask.length)]
	const secondColor = tinycolor(firstColor)
		.darken(20)
		.toHexString()

	return { firstColor, secondColor }
}
