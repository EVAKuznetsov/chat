import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { dialogsActions } from 'redux/actions'
import { Dialogs as BaseDialogs } from 'components'

const Dialogs = props => {
  // console.log(props)
  const {
    fetchDialogs,
    setCurentDialog,
    items,
    currentDialogId,
    className,
  } = props

  const [filtered, setFiltered] = useState(Array.from(items))
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = value => {
    setFiltered(
      items.filter(dialog =>
        dialog.user.fullName.toLowerCase().includes(value.toLowerCase())
      )
    )
    setInputValue(value)
  }
  const chooseDialog = id => {
    // alert(`Вы начали беседу с ${items.find(dialog => dialog._id === id).user.fullName}`)
    setInputValue('')
    setCurentDialog(id)
  }

  useEffect(() => {
    !items.length ? fetchDialogs() : setFiltered(items)
  }, [fetchDialogs, items])
  return (
    <BaseDialogs
      className={className}
      onSearch={onChangeInput}
      items={filtered ? filtered : items}
      inputValue={inputValue}
      chooseDialog={chooseDialog}
      currentDialogId={currentDialogId}
    />
  )
}
const mapStateToProps = state => state.dialogs

export default connect(mapStateToProps, dialogsActions)(Dialogs)
