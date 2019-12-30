import React from 'react'
import { connect } from 'react-redux'

import { Status as StatusBase } from 'components'

const Status = ({ dialogs, currentDialogId }) => {
	if (!currentDialogId) {
		return null
	}
	return <StatusBase />
}
const mapStateToProps = state => ({ dialogs: state.dialogs.items, currentDialogId: state.dialogs.currentDialogId })
export default connect(mapStateToProps)(Status)
