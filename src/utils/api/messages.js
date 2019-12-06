import { axios } from 'services'
export default {
	getAll: dialogId => axios.get(`/messages?dialogId=${dialogId}`),
}
