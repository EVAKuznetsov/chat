import React from 'react'
// import PropTypes from 'prop-types'

import { Input } from 'antd'
import { Button } from 'components'

import './ChatInput.sass'

const ChatInput = ({ value, sendMessage, changeValue }) => {
	return (
		<div className="chat-input">
			<Button className="chat-input__btn chat-input__smile-btn" icon="smile" />
			<Input
				placeholder="Введите сообщение"
				size="large"
				className="chat-input__input-field"
				value={value}
				onChange={e => changeValue(e.target.value)}
				multiple
			/>
			<div className="chat-input__actions">
				<Button className="chat-input__btn" icon="camera" />
				{value ? (
					<Button
						className="chat-input__btn"
						icon="check-circle"
						onClick={() => {
							sendMessage()
						}}
					/>
				) : (
					<Button className="chat-input__btn" icon="audio" />
				)}
			</div>
		</div>
	)
}

export default ChatInput
