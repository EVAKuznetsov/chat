import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Time, IconStatus } from 'components'

import './dialogs-item.sass'

const DialogsItem = ({ user, message, unReaded }) => {
	return (
		<div className="dialogs-item">
			<div className={classNames('dialogs-item__avatar', { 'dialogs-item__avatar_online': user.online })}>
				<img src={user.avatar} alt={user.fullName} />
			</div>
			<div className="dialogs-item__content">
				<div className="dialogs-item__top">
					<span className="dialogs-item__name">{user.fullName}</span>
					<div className="dialogs-item__info">
						{/* <IconStatus isChecked={message.isChecked} className="dialogs-item__isChecked" show={message.isMe} /> */}
						<Time date={message.date} />
					</div>
				</div>
				<div className="dialogs-item__main">
					<span className="dialogs-item__text">{message.text}</span>
					{message.isMe && (
						<IconStatus isChecked={message.isChecked} className="dialogs-item__isChecked" show={message.isMe} />
					)}
					{unReaded > 0 && <div className="dialogs-item__count-mis">{unReaded}</div>}
				</div>
			</div>
		</div>
	)
}

DialogsItem.propTypes = {
	user: PropTypes.object,
	message: PropTypes.object,
	unReaded: PropTypes.number,
}
export default DialogsItem
