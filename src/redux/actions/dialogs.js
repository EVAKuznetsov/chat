import {
  SET_ITEMS,
  FETCH_DATA,
  SET_CURRENT_DIALOG_ID,
} from 'constants/dialogsActions'

export const setDialogs = items => ({ type: SET_ITEMS, payload: items })
export const fetchDialogs = () => ({ type: FETCH_DATA })
export const setCurentDialog = _id => ({
  type: SET_CURRENT_DIALOG_ID,
  payload: _id,
})
