import React from 'react'
import { Typography, Dropdown, Popover, Menu, Icon } from 'antd'

import './ChatHeader.sass'

const ChatHeader = ({ user, onLogout }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Icon type="setting" />
        <span>Профиль</span>
      </Menu.Item>
      <Menu.Item key="1" onClick={onLogout}>
        <Icon type="import" />
        <span>Выход</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="chat-header">
      <Popover content={menu} placement="bottomRight" trigger="click">
        <div style={{ display: 'flex', cursor: 'pointer' }}>
          <Icon type="user" className="chat-header__menu-icon" />
          <Typography.Title level={4}>{user.fullName}</Typography.Title>
        </div>
      </Popover>
    </div>
  )
}

export default ChatHeader
