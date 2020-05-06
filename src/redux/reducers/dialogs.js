import { SET_ITEMS, SET_CURRENT_DIALOG_ID } from 'constants/dialogsActions'
const initialState = {
  items: [],
  currentDialogId: window.location.pathname.split('dialog/')[1],
}
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ITEMS:
      return { ...state, items: actions.payload }
    case SET_CURRENT_DIALOG_ID:
      return { ...state, currentDialogId: actions.payload }
    default:
      return state
  }
}
