import { axios } from 'services'
export default {
	getAll: () => axios.get('/dialogs'),
}
