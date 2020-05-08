import {
  SET_ITEMS,
  SET_CURRENT_DIALOG_ID,
  SET_LAST_MESSAGE,
} from 'constants/dialogsActions'
const initialState = {
  items: [],
  currentDialogId: null,
  // currentDialogId: window.location.pathname.split('chat/dialog/')[1],
}
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ITEMS:
      return { ...state, items: actions.payload }
    case SET_CURRENT_DIALOG_ID:
      return { ...state, currentDialogId: actions.payload }
    case SET_LAST_MESSAGE:
      const dialodIndex = state.items.findIndex(
        item => item._id === actions.payload.dialogId
      )
      const newItems = [...state.items]
      newItems[dialodIndex].lastMessage = actions.payload.message
      return { ...state, items: newItems }
    default:
      return state
  }
}
