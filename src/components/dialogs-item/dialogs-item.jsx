import React from 'react'
import PropTypes from 'prop-types'

import { Time, IconStatus } from 'components'

import './dialogs-item.sass'

const DialogsItem = ({ user, message }) => {
	return (
		<div className="dialogs-item">
			<div className="dialogs-item__avatar">
				<img src={user.avatar} alt={user.fullName} />
			</div>
			<div className="dialogs-item__content">
				<div className="dialogs-item__top">
					<span className="dialogs-item__name">{user.fullName}</span>
					<div className="dialogs-item__info">
						<IconStatus isChecked={message.isChecked} className="dialogs-item__isChecked" show={!message.isMe} />
						<Time date={message.date} />
					</div>
				</div>
				<div className="dialogs-item__main">
					<span className="dialogs-item__text">{message.text}</span>
					<div className="dialogs-item__count-mis">3</div>
				</div>
			</div>
		</div>
	)
}

DialogsItem.propTypes = {
	user: PropTypes.object,
	message: PropTypes.object,
}
export default DialogsItem
