import { all, call, put, takeEvery } from 'redux-saga/effects'
import { dialogsApi } from 'utils/api'
import { FETCH_DATA, SET_ITEMS } from 'constants/dialogsActions'

function* fetchDialogsWatcher() {
  yield takeEvery(FETCH_DATA, fetchData)
}
function* fetchData() {
  try {
    const results = yield call(dialogsApi.getAll)
    yield put({ type: SET_ITEMS, payload: results.data })
  } catch (error) {
    throw new Error(error)
  }
}

export default function* dialogsSaga() {
  yield all([fetchDialogsWatcher()])
}
