import { all, call, put, takeEvery } from 'redux-saga/effects'
import { dialogsApi } from 'utils/api'
import { FETCH_DATA } from 'constants/dialogsActions'
import { setDialogs } from '../actions/dialogs'

function* fetchDialogsWatcher() {
  yield takeEvery(FETCH_DATA, fetchData)
}
function* fetchData() {
  try {
    const results = yield call(dialogsApi.getAll)
    yield put(setDialogs(results.data))
  } catch (error) {
    throw new Error(error)
  }
}

export default function* dialogsSaga() {
  yield all([fetchDialogsWatcher()])
}
