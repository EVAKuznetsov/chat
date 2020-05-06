import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
} from 'constants/verifyActions'
export const verifyRequest = hash => ({ type: VERIFY_REQUEST, hash })
export const verifySuccess = () => ({ type: VERIFY_SUCCESS })
export const verifyFailure = error => ({ type: VERIFY_FAILURE, error })
