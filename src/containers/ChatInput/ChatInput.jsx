import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSendMessage } from 'redux/actions/messages'
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
    dispatch(fetchSendMessage({ text: value, dialog_id: currentDialogId }))
    setValue('')
  }
  const onSubmit = e => {
    if (e.keyCode === 13) return sendMessage()
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
      onSubmit={onSubmit}
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
