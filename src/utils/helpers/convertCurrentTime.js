export default number => {
	const min = Math.floor(number / 60)
	const sec = Math.floor(number % 60)
	return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}
