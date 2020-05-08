import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from 'antd'

const ChatHeader = () => {
  const { data: user } = useSelector(state => state.auth)
  return (
    user && (
      <div className="chat-header">
        {<Typography.Title level={4}>{user.fullName}</Typography.Title>}
      </div>
    )
  )
}

export default ChatHeader
