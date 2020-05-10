import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { IconStatus, Avatar, TextWidthEmoji } from 'components'

import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isThisYear from 'date-fns/isThisYear'
// import differenceInMinutes from 'date-fns/difference_in_minutes'

import './DialogsItem.sass'

const getMessageTime = created_at => {
  if (created_at) {
    const dateFormat = isToday(new Date(created_at))
      ? 'HH:mm'
      : isThisYear(new Date(created_at))
      ? 'dd.MM'
      : 'dd.MM.yyyy'
    return format(new Date(created_at), dateFormat)
  }
}
const DialogsItem = ({
  isMe,
  partner,
  dialog,
  chooseDialog,
  currentDialogId,
}) => {
  const { _id, lastMessage, unReaded } = dialog
  return (
    <Link to={`/chat/dialog/${_id}`}>
      <div
        className={classNames('dialogs-item', {
          'dialogs-item_active': currentDialogId === _id,
        })}
        onClick={chooseDialog}
      >
        <div
          className={classNames('dialogs-item__avatar', {
            'dialogs-item__avatar_online': partner.isOnline,
          })}
        >
          <Avatar user={partner} />
        </div>
        <div className="dialogs-item__content">
          <div className="dialogs-item__top">
            <span className="dialogs-item__name">{partner.fullName}</span>
            <div className="dialogs-item__info">
              {lastMessage && getMessageTime(lastMessage.createdAt)}
            </div>
          </div>
          <div className="dialogs-item__main">
            <span className="dialogs-item__text">
              {lastMessage && (
                <TextWidthEmoji text={lastMessage.text} emojiSize={18} />
              )}
            </span>
            <IconStatus
              isChecked={lastMessage && lastMessage.readed}
              className="dialogs-item__isChecked"
              show={isMe}
            />
            {unReaded > 0 && (
              <div className="dialogs-item__count-mis">
                {unReaded < 100 ? unReaded : '99+'}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

DialogsItem.propTypes = {
  message: PropTypes.object,
}
export default DialogsItem
