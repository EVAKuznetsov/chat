import { all, call, put, takeEvery } from 'redux-saga/effects'
import { authApi } from 'utils/api'
import { VERIFY_REQUEST } from 'constants/verifyActions'
import { verifySuccess, verifyFailure } from '../actions/verify'

/*******************
 * WATCHERS
 ******************/
function* verifyWatcher() {
  yield takeEvery(VERIFY_REQUEST, verify)
}

/*******************
 * WORKERS
 ******************/
function* verify({ hash }) {
  try {
    const result = yield call(authApi.verify, hash)
    if (result.data.status === 'success') {
      yield put(verifySuccess())
    } else {
      yield put(verifyFailure(result.data.message))
    }
  } catch (error) {
    verifyFailure('Ошибка проверки почты')
  }
}

export default function* verifySaga() {
  yield all([verifyWatcher()])
}
