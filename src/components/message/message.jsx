import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Time, IconStatus } from 'components'
import { convertCurrentTime } from 'utils/helpers'
import waveSvg from 'assets/img/wave.svg'
import playSvg from 'assets/img/play.svg'
import pauseSvg from 'assets/img/pause.svg'

import './message.sass'

const MessageAudio = ({ audio }) => {
	const [isPlay, setPlaying] = useState(false)
	const [progress, setProgress] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)

	const audioElem = useRef(null)

	useEffect(() => {
		if (audioElem.current !== null) {
			audioElem.current.volume = '0.1'

			audioElem.current.addEventListener(
				'playing',
				() => {
					setPlaying(true)
				},
				false
			)
			audioElem.current.addEventListener(
				'ended',
				() => {
					setPlaying(false)
					setProgress(0)
				},
				false
			)
			audioElem.current.addEventListener(
				'pause',
				() => {
					setPlaying(false)
				},
				false
			)
			audioElem.current.addEventListener(
				'timeupdate',
				e => {
					setProgress((e.target.currentTime / e.target.duration) * 100)
					setCurrentTime(e.target.currentTime)
				},
				false
			)
		}
	}, [])
	const togglePlay = () => {
		isPlay ? audioElem.current.pause() : audioElem.current.play()
	}
	return (
		<>
			<div className="message__audio-progress" style={{ width: `${progress}%` }}></div>
			<div className="message__audio-wrap">
				<audio ref={audioElem} src={audio} preload="auto"></audio>
				<button className="message__audio-btn" onClick={togglePlay}>
					<img src={isPlay ? pauseSvg : playSvg} alt="" />
				</button>
				<img src={waveSvg} alt="audio file" className="message__audio-wave" />
				<span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
			</div>
		</>
	)
}

const Message = ({ messageData }) => {
	const {
		avatar = '',
		user = {},
		text = '',
		date = '',
		isMe = false,
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
				<img src={avatar} alt={`avatar ${user.fullName}`} />
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
								{audio && <MessageAudio audio={audio} />}
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
