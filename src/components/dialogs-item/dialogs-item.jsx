import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { IconStatus } from 'components'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isThisYear from 'date-fns/isThisYear'
import './dialogs-item.sass'

const GetMessageTime = ({ created_at }) => {
	if (created_at) {
		return format(
			new Date(created_at),
			isToday(new Date(created_at)) ? 'HH:mm' : isThisYear(new Date(created_at)) ? 'dd.MM' : 'dd.MM.yyyy'
		)
	}
}

const DialogsItem = ({ message }) => {
	const { user, text, isChecked, created_at, unReaded, isMe } = message
	return (
		<div className="dialogs-item">
			<div className={classNames('dialogs-item__avatar', { 'dialogs-item__avatar_online': user.online })}>
				<img src={user.avatar} alt={user.fullName} />
			</div>
			<div className="dialogs-item__content">
				<div className="dialogs-item__top">
					<span className="dialogs-item__name">{user.fullName}</span>
					<div className="dialogs-item__info">
						{/* <IconStatus isChecked={isChecked} className="dialogs-item__isChecked" show={message.isMe} /> */}
						<GetMessageTime created_at={created_at} />
					</div>
				</div>
				<div className="dialogs-item__main">
					<span className="dialogs-item__text">{text}</span>
					{isMe && <IconStatus isChecked={isChecked} className="dialogs-item__isChecked" show={message.isMe} />}
					{unReaded > 0 && <div className="dialogs-item__count-mis">{unReaded}</div>}
				</div>
			</div>
		</div>
	)
}

DialogsItem.propTypes = {
	message: PropTypes.object,
}
export default DialogsItem
