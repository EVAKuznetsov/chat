import { all, call, put, takeEvery } from 'redux-saga/effects'
import { authApi } from 'utils/api'
import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  CURRENT_USER_REQUEST,
  LOGOUT,
} from '../../constants/authActions'
import showNotification from 'utils/helpers/showNotification'
import {
  signInSuccess,
  currentUserRequest,
  signInChangeLoading,
  currentUserSuccess,
  signInFailure,
} from '../actions/auth'
/*******************
 * WATCHERS
 ******************/
function* signInWatcher() {
  yield takeEvery(SIGN_IN_REQUEST, signIn)
}
function* signUpWatcher() {
  yield takeEvery(SIGN_UP_REQUEST, signUp)
}
function* currentUserWatcher() {
  yield takeEvery(CURRENT_USER_REQUEST, currentUser)
}
function* logoutWatcher() {
  yield takeEvery(LOGOUT, logout)
}

/*******************
 * WORKERS
 ******************/
function* signIn({ payload }) {
  try {
    const results = yield call(authApi.signIn, payload.values)
    if (results.data.status === 'error') {
      showNotification({
        type: 'error',
        title: 'Ошибка авторизации',
        text: results.data.message,
      })
      yield put(signInFailure(false))
    } else {
      const token = results.data.token
      window.axios.defaults.headers.common['token'] = token
      window.localStorage.token = token

      yield put(currentUserRequest())
      yield put(signInSuccess())
      showNotification({
        type: 'success',
        title: 'Успех!',
        text: 'Авторизация успешно пройдена',
      })
    }
  } catch (error) {
    throw new Error(error)
  }
}

function* signUp({ payload }) {
  try {
    yield put(signInChangeLoading(true))
    const results = yield call(authApi.signUp, payload.values)
    if (results.data.status === 'error') {
      showNotification({
        type: 'error',
        title: 'Ошибка регистрации',
        text: results.data.message,
      })
      yield put(signInChangeLoading(false))
    } else {
      yield put(signInChangeLoading(false))
      payload.history.push('/verify')
    }
  } catch (error) {
    throw new Error(error)
  }
}

function* currentUser() {
  try {
    if (window.localStorage.token) {
      const userData = yield call(authApi.fetchUserData)
      yield put(currentUserSuccess(userData.data.user))
    }
  } catch (error) {
    yield logout()
  }
}
function* logout() {
  window.localStorage.removeItem('token')
  yield put(signInFailure())
  window.location.href = '/'
}

export default function* authSaga() {
  yield all([
    signInWatcher(),
    signUpWatcher(),
    currentUserWatcher(),
    logoutWatcher(),
  ])
}
