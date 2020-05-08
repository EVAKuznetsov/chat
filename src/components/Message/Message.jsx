import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button, Popover, Popconfirm, Icon } from 'antd'

import { Time, IconStatus, AudioMessage, Avatar } from 'components'

import './Message.sass'

const Message = ({ messageData, removeMessage, isMe = false }) => {
  const {
    user = {},
    text = '',
    date = '',
    readed = false,
    attachment = [],
    isTyping = false,
    audio = '',
  } = messageData
  const popoverContent = (
    <div>
      <Popconfirm
        title="Вы дейнствительно хотите удалить сообщение?"
        onConfirm={removeMessage}
        okText="Да"
        cancelText="Нет"
        placement="leftTop"
      >
        <Button icon="delete">Удалить сообщение</Button>
      </Popconfirm>
    </div>
  )
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
          {isMe && (
            <Popover
              placement="topLeft"
              content={popoverContent}
              trigger="click"
            >
              <Icon
                type="ellipsis"
                size="large"
                className="message__settings"
              />
            </Popover>
          )}
          <IconStatus
            isChecked={readed}
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
