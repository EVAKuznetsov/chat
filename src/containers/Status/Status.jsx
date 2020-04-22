import React from 'react'
import { useSelector } from 'react-redux'

import { Status as StatusBase } from 'components'

const Status = () => {
  const { currentDialogId } = useSelector(state => state.dialogs)
  if (!currentDialogId) {
    return null
  }
  return <StatusBase />
}
export default Status
