import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Status.sass'

const Status = ({ online }) => (
	<div className={classNames('status', { status_online: online })}>{online ? 'Онлайн' : 'Офлайн'}</div>
)
Status.propTypes = {
	online: PropTypes.bool,
}

export default Status
