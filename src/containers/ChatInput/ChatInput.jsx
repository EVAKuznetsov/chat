import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { messagesActions } from 'redux/actions'
import { ChatInput as BaseChatInput } from 'components'

const ChatInput = ({ currentDialogId, addMessage }) => {
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
    addMessage(messageData)
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
const mapStateToProps = state => ({
  currentDialogId: state.dialogs.currentDialogId,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(messagesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)
