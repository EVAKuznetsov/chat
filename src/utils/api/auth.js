import { axios } from 'services'
export default {
  signIn: values => axios.post('/user/signin', values),
  signUp: values => axios.post('/user/signup', values),
  verify: hash => axios.get(`/user/verify?hash=${hash}`),
  fetchUserData: () => axios.get('/user/me'),
}
