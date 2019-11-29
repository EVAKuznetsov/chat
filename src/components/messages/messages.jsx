import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import orderBy from 'lodash/orderBy'

import { Message } from 'components'

const Messages = ({ items, className }) => {
	return (
		<div className={className}>
			{/*сортируем по дате отправки сообщений и отрисовываем список диалогов*/}
			{orderBy(items, 'date', 'asc').map(item => (
				<Message messageData={item} key={item.key} />
			))}
		</div>
	)
}

Messages.propTypes = {
	items: PropTypes.array,
	className: PropTypes.string,
}
export default Messages
