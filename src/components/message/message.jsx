import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Time, IconStatus } from 'components'

import './message.sass'

const Message = ({ avatar, user, text, date, isMe, isChecked, attachment, isTyping }) => {
	return (
		<div
			className={classNames(
				'message',
				{ message_my: isMe },
				{ message__typing: isTyping },
				{ message__img: attachment && attachment.length === 1 && !text }
			)}
		>
			<div className="message__avatar">
				<img src={avatar} alt={`avatar ${user.fullName}`} />
			</div>
			<div className="message__wrap">
				<div className="message__content">
					<div className="message__info">
						{(text || isTyping) && (
							<div className="message__bubble">
								{isTyping && (
									<>
										<span className="message__typing-item"></span>
										<span className="message__typing-item"></span>
										<span className="message__typing-item"></span>
									</>
								)}
								{text && <p className="message__text">{text}</p>}
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
					<IconStatus isChecked={isChecked} className="message__checked" show={isMe} />
				</div>
				{date && <Time date={date} />}
			</div>
		</div>
	)
}

Message.propTypes = {
	avatar: PropTypes.string,
	user: PropTypes.object,
	text: PropTypes.string,
	isMe: PropTypes.bool,
	isTyping: PropTypes.bool,
}
export default Message
