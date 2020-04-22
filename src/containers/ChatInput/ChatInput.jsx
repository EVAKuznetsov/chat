import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addMessage } from 'redux/actions/messages'
import { ChatInput as BaseChatInput } from 'components'

const ChatInput = () => {
  const dispatch = useDispatch()
  const { currentDialogId } = useSelector(state => state.dialogs)
  const [value, setValue] = useState('')
  const [emojiVisible, setEmojiVisible] = useState(false)
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
  const toggleEmoji = () => {
    setEmojiVisible(current => !current)
  }
  const addEmoji = emoji => {
    setValue(val => (val + ' ' + emoji).trim())
  }
  return currentDialogId ? (
    <BaseChatInput
      value={value}
      sendMessage={sendMessage}
      changeValue={changeValue}
      toggleEmoji={toggleEmoji}
      emojiVisible={emojiVisible}
      addEmoji={addEmoji}
    />
  ) : (
    <div></div>
  )
}
export default ChatInput
