import { call, put, all, takeEvery } from 'redux-saga/effects'
import {
  FETCH_MESSAGES,
  SET_IS_LOADING,
  SET_ALL_MESSAGES,
} from '../../constants/messagesActions'
import { messagesApi } from 'utils/api'

function* watchFetchMessages() {
  yield takeEvery(FETCH_MESSAGES, fetchMessages)
}
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

export default function* messagesSaga() {
  yield all([watchFetchMessages()])
}
