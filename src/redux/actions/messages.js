import { messagesApi } from 'utils/api'

const actions = {
	setAll: items => ({ type: 'MESSAGES:SET_ALL_MESSAGES', payload: items }),
	fetchMessages: dialogId => dispatch => {
		messagesApi.getAll(dialogId).then(({ data }) => dispatch(actions.setAll(data)))
	},
}
export default actions
