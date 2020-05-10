import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Status.sass'

const Status = ({ partner = {} }) => {
  return (
    <div className="chat__dialog-header">
      <div className="chat__dialog-header-info">
        <div className="chat__dialog-header-username">{partner.fullName}</div>
        <div className="chat__dialog-status">
          <div
            className={classNames('status', {
              status_online: partner.isOnline,
            })}
          >
            {partner.isOnline ? 'Онлайн' : 'Офлайн'}
          </div>
        </div>
      </div>
    </div>
  )
}
Status.propTypes = {
  online: PropTypes.bool,
}

export default Status
