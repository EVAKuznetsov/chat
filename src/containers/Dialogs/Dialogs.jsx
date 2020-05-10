import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import socket from 'services/socket'
import {
  fetchDialogs,
  setCurentDialog,
  updateLastMessageInDialog,
} from 'redux/actions/dialogs'
import { Dialogs as BaseDialogs } from 'components'

const Dialogs = props => {
  const dispatch = useDispatch()
  const { className } = props
  const { items, currentDialogId } = useSelector(state => state.dialogs)
  const { data: user } = useSelector(state => state.auth)
  const [filtered, setFiltered] = useState(Array.from(items))
  const [inputValue, setInputValue] = useState('')
  const onChangeInput = value => {
    setFiltered(
      items.filter(dialog => {
        const dialogUser =
          dialog.partner._id === user._id ? dialog.author : dialog.partner
        return dialogUser.fullName.toLowerCase().includes(value.toLowerCase())
      })
    )
    setInputValue(value)
  }
  const chooseDialog = id => {
    setInputValue('')
    dispatch(setCurentDialog(id))
  }
  useEffect(() => {
    socket.on('SERVER:DIALOG_CREATED', () => {
      dispatch(fetchDialogs())
    })
    socket.on('SERVER:LAST_MESSAGE_CHANGED', message => {
      dispatch(updateLastMessageInDialog(message))
    })
    return () => {
      socket.removeListener('SERVER:DIALOG_CREATED')
      socket.removeListener('SERVER:LAST_MESSAGE_CHANGED')
    }
  }, [dispatch])
  useEffect(() => {
    !items.length ? dispatch(fetchDialogs()) : setFiltered(items)
  }, [dispatch, items])

  return (
    user && (
      <BaseDialogs
        userId={user._id}
        className={className}
        onSearch={onChangeInput}
        items={filtered ? filtered : items}
        inputValue={inputValue}
        chooseDialog={chooseDialog}
        currentDialogId={currentDialogId}
      />
    )
  )
}
export default Dialogs
