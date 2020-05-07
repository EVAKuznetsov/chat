import {
  SET_ALL_MESSAGES,
  SET_IS_LOADING,
  ADD_MESSAGE,
  REMOVE_MESSAGE,
} from 'constants/messagesActions'

const initialState = {
  items: [],
  isLoading: false,
}
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ALL_MESSAGES:
      return { ...state, items: actions.payload }
    case SET_IS_LOADING:
      return { ...state, isLoading: actions.payload }
    case ADD_MESSAGE:
      return { ...state, items: [...state.items, { ...actions.message }] }
    case REMOVE_MESSAGE:
      const messageIndex = state.items.findIndex(
        item => item._id === actions.messageId
      )
      const newItems = [...state.items]
      newItems.splice(messageIndex, 1)
      return { ...state, items: newItems }
    default:
      return state
  }
}
