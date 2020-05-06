import { axios } from 'services'
export default {
  getAll: dialogId => axios.get(`/message?dialog_id=${dialogId}`),
  send: message => axios.post('/message/create', message),
}
