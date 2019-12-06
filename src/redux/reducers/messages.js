const initialState = {
	items: [],
}
export default (state = initialState, actions) => {
	switch (actions.type) {
		case 'MESSAGES:SET_ALL_MESSAGES':
			return { items: actions.payload }
		default:
			return state
	}
}
