import React from 'react'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/formatDistanceToNow'
import russian from 'date-fns/locale/ru'
import classNames from 'classnames'

import './time.sass'

const Time = ({ date, className }) => {
	return (
		<time className={classNames('time', className)}>
			{distanceInWordsToNow(new Date(date), {
				locale: russian,
				addSuffix: true,
			})}
		</time>
	)
}

Time.propTypes = {
	date: PropTypes.string,
	className: PropTypes.string,
}
export default Time
