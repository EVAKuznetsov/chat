import { combineReducers } from 'redux'
import dialogs from './dialogs'
import messages from './messages'
import auth from './auth'
import verify from './verify'

export default combineReducers({
  dialogs,
  messages,
  auth,
  verify,
})
