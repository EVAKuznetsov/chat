import { axios } from 'services'
export default {
  getAll: () => axios.get('/dialog'),
  create: ({ text, partner }) =>
    axios.post('/dialog/create', { partner, text }),
}
