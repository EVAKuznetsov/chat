import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_LOADING,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_REQUEST,
} from '../../constants/authActions'

export const signInRequest = payload => ({ type: SIGN_IN_REQUEST, payload })
export const signInSuccess = () => ({ type: SIGN_IN_SUCCESS })
export const signInFailure = error => ({ type: SIGN_IN_FAILURE, error })
export const signInChangeLoading = isLoading => ({
  type: SIGN_IN_LOADING,
  isLoading,
})
export const currentUserRequest = () => ({ type: CURRENT_USER_REQUEST })
export const currentUserSuccess = data => ({
  type: CURRENT_USER_SUCCESS,
  data,
})

export const signUpRequest = payload => ({ type: SIGN_UP_REQUEST, payload })
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS })
