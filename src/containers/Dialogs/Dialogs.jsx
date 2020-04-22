import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDialogs, setCurentDialog } from 'redux/actions/dialogs'
import { Dialogs as BaseDialogs } from 'components'

const Dialogs = props => {
  const dispatch = useDispatch()
  const { className } = props
  const { items, currentDialogId } = useSelector(state => state.dialogs)
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
    setInputValue('')
    dispatch(setCurentDialog(id))
  }

  useEffect(() => {
    !items.length ? dispatch(fetchDialogs()) : setFiltered(items)
  }, [dispatch, items])

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
export default Dialogs
