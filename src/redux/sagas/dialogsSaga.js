import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { dialogsApi } from 'utils/api'
import { FETCH_DATA, UPDATE_LAST_MESSAGE } from 'constants/dialogsActions'
import { setDialogs, setNewLastMessage } from '../actions/dialogs'

function* fetchDialogsWatcher() {
  yield takeEvery(FETCH_DATA, fetchData)
}
function* updateLastMessageWatcher() {
  yield takeEvery(UPDATE_LAST_MESSAGE, updateLastMessage)
}
function* fetchData() {
  try {
    const results = yield call(dialogsApi.getAll)
    if (results.data.length > 0) {
      yield put(setDialogs(results.data))
    }
  } catch (error) {
    throw new Error(error)
  }
}

function* updateLastMessage({ message }) {
  const dialogs = yield select(state => state.dialogs.items)
  const dialog = dialogs.find(dialog => dialog._id === message.dialog._id)
  if (dialog)
    return yield put(setNewLastMessage({ dialogId: dialog._id, message }))
}

export default function* dialogsSaga() {
  yield all([fetchDialogsWatcher(), updateLastMessageWatcher()])
}
