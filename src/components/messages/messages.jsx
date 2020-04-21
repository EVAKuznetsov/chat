import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import orderBy from 'lodash/orderBy'
import { Empty, Spin } from 'antd'

import { Message } from 'components'

const Messages = ({ items, className, isLoading }) => {
  return items && isLoading ? (
    <Spin />
  ) : items && items.length ? (
    <div className={className}>
      {orderBy(items, 'date', 'asc').map(item => (
        <Message messageData={item} key={item._id} />
      ))}
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
