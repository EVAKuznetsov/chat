import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  CURRENT_USER_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_LOADING,
} from '../../constants/authActions'
const initialState = {
  isAuth: window.localStorage.token ? true : false,
  data: null,
  error: null,
  isLoading: false,
}
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SIGN_IN_REQUEST:
      return { ...state, isLoading: true }
    case SIGN_IN_SUCCESS:
      return { ...state, isAuth: true, error: null, isLoading: false }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuth: false,
        data: null,
        isLoading: false,
        error: actions.error,
      }
    case SIGN_IN_LOADING:
      return { ...state, isLoading: actions.isLoading }
    case CURRENT_USER_SUCCESS:
      return { ...state, data: actions.data }
    default:
      return state
  }
}
