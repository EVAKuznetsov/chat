import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import { Input, Empty } from 'antd'
import orderBy from 'lodash/orderBy'

import { DialogsItem } from 'components'

import './Dialogs.sass'

const Dialogs = ({
  userId,
  items,
  currentDialogId,
  className,
  onSearch,
  inputValue,
  chooseDialog,
}) => {
  return (
    <>
      <div className="chat__sidebar-search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={e => onSearch(e.target.value)}
          value={inputValue}
          style={{ width: '100%' }}
        />
      </div>
      {items.length ? (
        <div className={className}>
          {/*сортируем по дате отправки сообщений и отрисовываем список диалогов*/}
          {orderBy(items, 'created_at', 'desc').map(item => (
            <DialogsItem
              isMe={userId === item.lastMessage.user._id}
              partner={userId === item.author._id ? item.partner : item.author}
              dialog={item}
              currentDialogId={currentDialogId}
              key={item._id}
              chooseDialog={() => chooseDialog(item._id)}
            />
          ))}
        </div>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Ничего нет :("
        />
      )}
    </>
  )
}

Dialogs.propTypes = {
  items: PropTypes.array,
}
export default Dialogs