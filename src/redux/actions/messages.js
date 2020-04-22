import {
  SET_ALL_MESSAGES,
  SET_IS_LOADING,
  ADD_MESSAGES,
  FETCH_MESSAGES,
} from 'constants/messagesActions'

export const setAll = items => ({ type: SET_ALL_MESSAGES, payload: items })
export const setIsLoading = bool => ({ type: SET_IS_LOADING, payload: bool })
export const fetchMessages = dialogId => ({ type: FETCH_MESSAGES, dialogId })
export const addMessage = ({ _id, text, dialogId, created_at }) => ({
  type: ADD_MESSAGES,
  payload: {
    _id: _id,
    text: text,
    dialogId: dialogId,
    created_at: created_at,
  },
})
