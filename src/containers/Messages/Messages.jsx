import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { messagesActions } from 'redux/actions'
import { Messages as BaseMessages } from 'components'

const Messages = ({ items, className, fetchMessages, currentDialogId }) => {
	/**
	 * При изменении в сторе текущего диалога будем обновлять список сообщений
	 */
	useEffect(() => {
		currentDialogId && fetchMessages(currentDialogId)
	}, [currentDialogId, fetchMessages])

	return <BaseMessages items={items} className={className} />
}

Messages.propTypes = {
	items: PropTypes.array,
	className: PropTypes.string,
}
const mapStateToProps = state => ({ ...state.messages, currentDialogId: state.dialogs.currentDialogId })
export default connect(mapStateToProps, messagesActions)(Messages)
