import React from 'react'
import classNames from 'classnames'
import { Icon, Popover, Menu } from 'antd'
import PropTypes from 'prop-types'
import './Status.sass'

const Status = ({ dialog = {}, partner = {} }) => {
  const popoverContent = (
    <div>
      <Menu>
        <Menu.Item key="1">
          <Icon type="delete" />
          <span>Удалить диалог</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="notification" />
          <span>Отключить уведомления</span>
        </Menu.Item>
      </Menu>
    </div>
  )
  return (
    <div className="chat__dialog-header">
      <div></div>
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
      <Popover content={popoverContent} trigger="click" placement="bottomRight">
        <Icon type="ellipsis" className="chat__icon-antd" />
      </Popover>
    </div>
  )
}
Status.propTypes = {
  online: PropTypes.bool,
}

export default Status
