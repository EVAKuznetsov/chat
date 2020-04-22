import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMessages } from 'redux/actions/messages'
import { Messages as BaseMessages } from 'components'

const Messages = ({ className }) => {
  const dispatch = useDispatch()
  const { items, isLoading } = useSelector(state => state.messages)
  const { currentDialogId } = useSelector(state => state.dialogs)

  useEffect(() => {
    currentDialogId && dispatch(fetchMessages(currentDialogId))
  }, [currentDialogId, dispatch])

  return (
    <BaseMessages items={items} className={className} isLoading={isLoading} />
  )
}

Messages.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
}
export default Messages
