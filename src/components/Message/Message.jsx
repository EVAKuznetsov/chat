import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Time, IconStatus, AudioMessage, Avatar } from 'components'

import './Message.sass'

const Message = ({ messageData, isMe = false }) => {
  const {
    user = {},
    text = '',
    date = '',
    isChecked = false,
    attachment = [],
    isTyping = false,
    audio = '',
  } = messageData
  return (
    <div
      className={classNames(
        'message',
        { message_my: isMe },
        { message__typing: isTyping },
        { message__img: attachment && attachment.length === 1 && !text },
        { message__audio: audio }
      )}
    >
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__wrap">
        <div className="message__content">
          <div className="message__info">
            {(audio || text || isTyping) && (
              <div className="message__bubble">
                {isTyping && (
                  <>
                    <span className="message__typing-item"></span>
                    <span className="message__typing-item"></span>
                    <span className="message__typing-item"></span>
                  </>
                )}
                {text && <p className="message__text">{text}</p>}
                {audio && <AudioMessage audio={audio} />}
              </div>
            )}
            {attachment && (
              <div className="message__attachment">
                {attachment.map(file => (
                  <div key={file.key} className="message__attachment-img">
                    <img src={file.src} alt={file.fileName} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <IconStatus
            isChecked={isChecked}
            className="message__checked"
            show={isMe}
          />
        </div>
        {date && <Time date={date} />}
      </div>
    </div>
  )
}

Message.propTypes = {
  messageData: PropTypes.object,
}
export default Message
