import React from 'react'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/formatDistanceToNow'
import russian from 'date-fns/locale/ru'
import classNames from 'classnames'

import readedSvg from 'assets/img/readed.svg'
import noReadedSvg from 'assets/img/noreaded.svg'

import './message.sass'

const Message = ({ avatar, user, text, date, isMe, isChecked, attachment }) => {
	return (
		<div className={classNames('message', { message_my: isMe })}>
			<div className="message__avatar">
				<img src={avatar} alt={`avatar ${user.fullName}`} />
			</div>
			<div className="message__wrap">
				<div className="message__content">
					<div className="message__info">
						<div className="message__bubble">
							<p className="message__text">{text}</p>
						</div>
						{!!attachment && (
							<div className="message__attachment">
								{attachment.map(file => (
									<img key src={file.src} className="message__attachment-img" alt={file.fileName} />
								))}
							</div>
						)}
					</div>
					{isMe &&
						(isChecked ? (
							<img src={readedSvg} className="message__checked" alt="message checked icon" />
						) : (
							<img src={noReadedSvg} className="message__checked" alt="message didn't check icon" />
						))}
				</div>
				<time className="message__time">
					{distanceInWordsToNow(new Date(date), {
						locale: russian,
						addSuffix: true,
					})}
				</time>
			</div>
		</div>
	)
}

Message.propTypes = {
	avatar: PropTypes.string,
	user: PropTypes.object,
	text: PropTypes.string,
	isMe: PropTypes.bool,
}
export default Message
