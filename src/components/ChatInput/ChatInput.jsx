import React from 'react'
// import PropTypes from 'prop-types'

import { Input } from 'antd'
import { Picker } from 'emoji-mart'
import { Button } from 'components'

import './ChatInput.sass'

const ChatInput = ({
  value,
  onSubmit,
  sendMessage,
  changeValue,
  toggleEmoji,
  emojiVisible,
  addEmoji,
  wrapperRef,
  emojiButton,
}) => {
  return (
    <div className="chat-input">
      {emojiVisible && (
        <div ref={wrapperRef} className={'chat-input__emoji-block'}>
          <Picker set="apple" onClick={e => addEmoji(e.colons)} />
        </div>
      )}
      <Button
        className="chat-input__btn chat-input__smile-btn"
        icon="smile"
        onClick={toggleEmoji}
      />
      {/* <div
        placeholder="Введите сообщение"
        size="large"
        onKeyUp={onSubmit}
        className="chat-input__input-field"
        onChange={e => changeValue(e.target.value)}
        tabIndex="0"
        contentEditable="true"
        role="textbox"
        aria-multiline="true"
      >
        {<TextWidthEmoji text={value} emojiSize={18} />}
      </div> */}
      <Input.TextArea
        autoSize={{ maxRows: 3 }}
        placeholder="Введите сообщение"
        size="large"
        onKeyUp={onSubmit}
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
