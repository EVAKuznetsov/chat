import React, { useState } from 'react'

import { Dialogs as BaseDialogs } from 'components'

const Dialogs = ({ items, className }) => {
	const [filtered, setFiltered] = useState([...items])
	const [inputValue, setInputValue] = useState('')

	const onChangeInput = value => {
		setFiltered(items.filter(dialog => dialog.user.fullName.toLowerCase().includes(value.toLowerCase())))
		setInputValue(value)
	}
	const chooseDialog = id => {
		alert(`Вы начали беседу с ${items.find(dialog => dialog._id === id).user.fullName}`)
		setInputValue('')
	}
	return (
		<BaseDialogs
			className={className}
			onSearch={onChangeInput}
			items={filtered ? filtered : items}
			inputValue={inputValue}
			chooseDialog={chooseDialog}
		/>
	)
}

export default Dialogs
