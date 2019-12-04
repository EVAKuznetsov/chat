import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import orderBy from 'lodash/orderBy'
import { Empty } from 'antd'

import { Message } from 'components'

const Messages = ({ items, className }) => {
	return items.length ? (
		<div className={className}>
			{orderBy(items, 'date', 'asc').map(item => (
				<Message messageData={item} key={item.key} />
			))}
		</div>
	) : (
		<Empty description="Сообщений пока нет" />
	)
}

Messages.propTypes = {
	items: PropTypes.array,
	className: PropTypes.string,
}
export default Messages
