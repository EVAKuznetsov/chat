import { dialogsApi } from 'utils/api'

const actions = {
	setDialogs: items => ({ type: 'DIALOGS:SET_ITEMS', payload: items }),
	fetchDialogs: () => dispatch => {
		dialogsApi.getAll().then(({ data }) => {
			dispatch(actions.setDialogs(data))
		})
	},
	setCurentDialog: _id => ({ type: 'DIALOGS:SET_CURRENT_DIALOG_ID', payload: _id }),
}

export default actions
