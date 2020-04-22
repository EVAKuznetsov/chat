import React from 'react'
// import PropTypes from 'prop-types'

import { Input } from 'antd'
import { Picker } from 'emoji-mart'
import { Button } from 'components'

import './ChatInput.sass'

const ChatInput = ({
  value,
  sendMessage,
  changeValue,
  toggleEmoji,
  emojiVisible,
  addEmoji,
}) => {
  return (
    <div className="chat-input">
      {emojiVisible && (
        <div className={'chat-input__emoji-block'}>
          <Picker set="apple" onClick={e => addEmoji(e.colons)} />
        </div>
      )}
      <Button
        className="chat-input__btn chat-input__smile-btn"
        icon="smile"
        onClick={toggleEmoji}
      />
      <Input
        placeholder="Введите сообщение"
        size="large"
        className="chat-input__input-field"
        value={value}
        onChange={e => changeValue(e.target.value)}
        multiple
      />
      <div className="chat-input__actions">
        <Button className="chat-input__btn" icon="camera" />
        {value ? (
          <Button
            className="chat-input__btn"
            icon="check-circle"
            onClick={() => {
              sendMessage()
            }}
          />
        ) : (
          <Button className="chat-input__btn" icon="audio" />
        )}
      </div>
    </div>
  )
}

export default ChatInput
