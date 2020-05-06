import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Status as StatusBase } from 'components'

const Status = () => {
  const { currentDialogId, items } = useSelector(state => state.dialogs)
  const { data: user } = useSelector(state => state.auth)
  const [currentDialod, setCurrentDialod] = useState(null)

  useEffect(() => {
    const dialog = currentDialogId
      ? items.find(dialog => dialog._id === currentDialogId)
      : null
    setCurrentDialod(dialog)
  }, [currentDialogId, items])

  if (!currentDialogId || !user || !currentDialod) {
    return null
  }

  return (
    <StatusBase
      dialog={currentDialod}
      partner={
        user._id === currentDialod.author._id
          ? currentDialod.partner
          : currentDialod.author
      }
    />
  )
}
export default Status
