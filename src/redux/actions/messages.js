import {
  SET_ALL_MESSAGES,
  SET_IS_LOADING,
  ADD_MESSAGE,
  FETCH_SEND_MESSAGE,
  FETCH_REMOVE_MESSAGE,
  FETCH_MESSAGES,
  REMOVE_MESSAGE,
} from 'constants/messagesActions'

export const setAll = items => ({ type: SET_ALL_MESSAGES, payload: items })
export const setIsLoading = bool => ({ type: SET_IS_LOADING, payload: bool })
export const fetchMessages = dialogId => ({ type: FETCH_MESSAGES, dialogId })
export const addMessage = message => ({ type: ADD_MESSAGE, message })
export const fetchSendMessage = message => ({
  type: FETCH_SEND_MESSAGE,
  message,
})
export const fetchRemoveMessage = messageId => ({
  type: FETCH_REMOVE_MESSAGE,
  messageId,
})
export const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId,
})
