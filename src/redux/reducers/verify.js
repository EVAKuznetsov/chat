import {
  VERIFY_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_FAILURE,
} from 'constants/verifyActions'

const initialState = {
  isChecking: false,
  verifyed: false,
  error: null,
}
export default (state = initialState, actions) => {
  switch (actions.type) {
    case VERIFY_REQUEST:
      return { ...state, isChecking: true }
    case VERIFY_SUCCESS:
      return { ...state, isChecking: false, verifyed: true }
    case VERIFY_FAILURE:
      return {
        ...state,
        isChecking: false,
        verifyed: false,
        error: actions.error,
      }
    default:
      return state
  }
}
