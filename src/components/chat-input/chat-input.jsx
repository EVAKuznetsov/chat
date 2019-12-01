import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import { Input } from 'antd'
import { Button } from 'components'

import './chat-input.sass'

const ChatInput = () => {
	const [textInput, setTextInput] = useState('')
	return (
		<div className="chat-input">
			<Button className="chat-input__btn chat-input__smile-btn" icon="smile" />
			<Input
				placeholder="Введите сообщение"
				size="large"
				className="chat-input__input-field"
				value={textInput}
				onChange={e => setTextInput(e.target.value)}
				multiple
			/>
			<div className="chat-input__actions">
				<Button className="chat-input__btn" icon="camera" />
				<Button className="chat-input__btn" icon={textInput ? 'check-circle' : 'audio'} />
			</div>
		</div>
	)
}

export default ChatInput
