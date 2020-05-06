import React from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'
import { Empty, Spin } from 'antd'

import { Message } from 'components'

const Messages = ({ items, bottomRef, userId, className, isLoading }) => {
  return items && isLoading ? (
    <Spin />
  ) : items && items.length ? (
    <div className={className}>
      {orderBy(items, 'date', 'asc').map(item => (
        <Message
          messageData={item}
          isMe={item.user.id === userId}
          key={item._id}
        />
      ))}
      <div ref={bottomRef}></div>
    </div>
  ) : (
    <Empty description="Сообщений пока нет" />
  )
}

Messages.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
}
export default Messages
