import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import orderBy from 'lodash/orderBy'

import { DialogsItem } from 'components'

import './dialogs.sass'

const Dialogs = ({ items, className }) => {
	return (
		<div className={className}>
			{/*сортируем по дате отправки сообщений и отрисовываем список диалогов*/}
			{orderBy(items, 'created_at', 'desc').map(item => (
				<DialogsItem message={item} key={item._id} />
			))}
		</div>
	)
}

Dialogs.propTypes = {
	items: PropTypes.array,
}
export default Dialogs
