import { messagesApi } from 'utils/api'

const actions = {
	setAll: items => ({ type: 'MESSAGES:SET_ALL_MESSAGES', payload: items }),
	fetchMessages: dialogId => dispatch => {
		messagesApi.getAll(dialogId).then(({ data }) => dispatch(actions.setAll(data)))
	},
	addMessage: ({ _id, text, dialogId, created_at }) => ({
		type: 'MESSAGES:ADD_MESSAGES',
		payload: { _id: _id, text: text, dialogId: dialogId, created_at: created_at },
	}),
}
export default actions
