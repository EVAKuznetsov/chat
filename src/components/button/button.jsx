import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'antd'
import ClassNames from 'classnames'

import './button.sass'

const Button = props => {
	return (
		<div>
			<BaseButton {...props} className={ClassNames('button', props.className)}>
				{props.children}
			</BaseButton>
		</div>
	)
}

Button.propTypes = {
	className: PropTypes.string,
}
export default Button
