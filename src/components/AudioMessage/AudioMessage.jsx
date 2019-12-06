import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { convertCurrentTime } from 'utils/helpers'
import waveSvg from 'assets/img/wave.svg'
import playSvg from 'assets/img/play.svg'
import pauseSvg from 'assets/img/pause.svg'

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

MessageAudio.propTypes = {
	audio: PropTypes.string,
}
export default MessageAudio
