import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ChatHeader } from 'components'
import { logout } from 'redux/actions/auth'

const ChatHeaderContainer = () => {
  const dispatch = useDispatch()
  const { data: user } = useSelector(state => state.auth)
  const onLogout = () => {
    dispatch(logout())
  }

  return user && <ChatHeader user={user} onLogout={onLogout} />
}

export default ChatHeaderContainer
