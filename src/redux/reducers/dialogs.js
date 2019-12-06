const initialState = {
	items: [],
	currentDialogId: null,
}
export default (state = initialState, actions) => {
	switch (actions.type) {
		case 'DIALOGS:SET_ITEMS':
			return { items: actions.payload }
		case 'DIALOGS:SET_CURRENT_DIALOG_ID':
			return { ...state, currentDialogId: actions.payload }
		default:
			return state
	}
}
