import {
  SET_ITEMS,
  FETCH_DATA,
  SET_CURRENT_DIALOG_ID,
  UPDATE_LAST_MESSAGE,
  SET_LAST_MESSAGE,
} from 'constants/dialogsActions'

export const setDialogs = items => ({ type: SET_ITEMS, payload: items })
export const fetchDialogs = () => ({ type: FETCH_DATA })
export const setCurentDialog = _id => ({
  type: SET_CURRENT_DIALOG_ID,
  payload: _id,
})
export const updateLastMessageInDialog = message => ({
  type: UPDATE_LAST_MESSAGE,
  message,
})
export const setNewLastMessage = payload => ({
  type: SET_LAST_MESSAGE,
  payload,
})
