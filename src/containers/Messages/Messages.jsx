import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import socket from 'services/socket'
import {
  fetchMessages,
  addMessage,
  removeMessage,
  fetchRemoveMessage,
} from 'redux/actions/messages'
import { Messages as BaseMessages } from 'components'

const Messages = ({ className }) => {
  const dispatch = useDispatch()
  const { items, isLoading } = useSelector(state => state.messages)
  const { currentDialogId } = useSelector(state => state.dialogs)
  const { data: user } = useSelector(state => state.auth)
  const bottomRef = useRef(null)

  const scrollBottom = () => {
    setTimeout(() => {
      bottomRef.current && bottomRef.current.scrollIntoView()
    }, 10)
  }
  useEffect(() => {
    socket.on('SERVER:MESSAGE_REMOVED', message => {
      currentDialogId === message.dialog && dispatch(removeMessage(message._id))
    })
    scrollBottom()

    return () => socket.removeListener('SERVER:MESSAGE_REMOVED')
  }, [currentDialogId, dispatch, items])

  useEffect(() => {
    currentDialogId && dispatch(fetchMessages(currentDialogId))
    socket.on('SERVER:MESSAGE_CREATED', message => {
      currentDialogId === message.dialog._id && dispatch(addMessage(message))
    })

    return () => socket.removeListener('SERVER:MESSAGE_CREATED')
  }, [currentDialogId, dispatch])

  const removeMessageById = messageId => {
    dispatch(fetchRemoveMessage(messageId))
  }
  return (
    user && (
      <BaseMessages
        bottomRef={bottomRef}
        items={items}
        userId={user._id}
        className={className}
        isLoading={isLoading}
        removeMessage={removeMessageById}
      />
    )
  )
}

Messages.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
}
export default Messages
