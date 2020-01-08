import { messagesApi } from 'utils/api'

const actions = {
	setAll: items => ({ type: 'MESSAGES:SET_ALL_MESSAGES', payload: items }),
	setIsLoading: bool => ({ type: 'MESSAGES:SET_IS_LOADING', payload: bool }),
	fetchMessages: dialogId => dispatch => {
		dispatch(actions.setIsLoading(true))
		messagesApi
			.getAll(dialogId)
			.then(({ data }) => dispatch(actions.setAll(data)))
			.then(() => dispatch(actions.setIsLoading(false)))
	},
	addMessage: ({ _id, text, dialogId, created_at }) => ({
		type: 'MESSAGES:ADD_MESSAGES',
		payload: { _id: _id, text: text, dialogId: dialogId, created_at: created_at },
	}),
}
export default actions
