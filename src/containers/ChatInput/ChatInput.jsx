import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addMessage } from 'redux/actions/messages'
import { ChatInput as BaseChatInput } from 'components'

const ChatInput = () => {
  const dispatch = useDispatch()
  const { currentDialogId } = useSelector(state => state.messages)
  const [value, setValue] = useState('')

  const changeValue = val => {
    setValue(val)
  }
  const sendMessage = () => {
    const messageData = {
      _id: 999,
      text: value,
      dialogId: currentDialogId,
      created_at: new Date(),
    }
    dispatch(addMessage(messageData))
    setValue('')
  }
  return (
    <BaseChatInput
      value={value}
      sendMessage={sendMessage}
      changeValue={changeValue}
    />
  )
}
export default ChatInput
