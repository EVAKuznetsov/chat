const initialState = {
	items: [],
	isLoading: false,
}
export default (state = initialState, actions) => {
	switch (actions.type) {
		case 'MESSAGES:SET_ALL_MESSAGES':
			return { ...state, items: actions.payload }
		case 'MESSAGES:SET_IS_LOADING':
			return { ...state, isLoading: actions.payload }
		case 'MESSAGES:ADD_MESSAGES':
			return { ...state, items: [...state.items, { ...actions.payload }] }
		default:
			return state
	}
}
