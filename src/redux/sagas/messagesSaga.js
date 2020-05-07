import { call, put, all, takeEvery } from 'redux-saga/effects'
import {
  FETCH_MESSAGES,
  SET_IS_LOADING,
  SET_ALL_MESSAGES,
  FETCH_SEND_MESSAGE,
  FETCH_REMOVE_MESSAGE,
} from '../../constants/messagesActions'
import { messagesApi } from 'utils/api'
// import { addMessage } from '../actions/messages'

/*******************
 * WATCHERS
 ******************/

function* watchFetchMessages() {
  yield takeEvery(FETCH_MESSAGES, fetchMessages)
}
function* watchFetchSendMessage() {
  yield takeEvery(FETCH_SEND_MESSAGE, fetchSendMessage)
}
function* watchRemoveMessage() {
  yield takeEvery(FETCH_REMOVE_MESSAGE, removeMessage)
}

/*******************
 * WORKERS
 ******************/

function* fetchMessages({ dialogId }) {
  yield put({ type: SET_IS_LOADING, payload: true })
  try {
    const results = yield call(messagesApi.getAll, dialogId)
    yield put({ type: SET_ALL_MESSAGES, payload: results.data })
  } catch (error) {
    throw new Error(error)
  }
  yield put({ type: SET_IS_LOADING, payload: false })
}

function* fetchSendMessage({ message }) {
  try {
    yield call(messagesApi.send, message)
  } catch (error) {
    throw new Error('сообщение не отправленно')
  }
}

function* removeMessage({ messageId }) {
  try {
    yield call(messagesApi.removeById, messageId)
  } catch (error) {}
}

export default function* messagesSaga() {
  yield all([
    watchFetchMessages(),
    watchFetchSendMessage(),
    watchRemoveMessage(),
  ])
}
