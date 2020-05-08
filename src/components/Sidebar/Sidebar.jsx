import React from 'react'
import { Icon, Modal, Button, Select, Input, Form } from 'antd'

import { Dialogs } from 'containers'

const Sidebar = ({
  modalOpen,
  closeModal,
  showModal,
  onSelectUser,
  textValue,
  usersList,
  onChangeNameValue,
  isLoading,
  isSearching,
  onChangeTextValue,
  addDialog,
  disabled,
}) => {
  const options = usersList.map(user => (
    <Select.Option key={user._id}>
      <span>{user.fullName}</span>({user.email})
    </Select.Option>
  ))
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div className="chat__sidebar-header-title">
          <Icon type="team" className="chat__sidebar-header-title-icon" />
          <span>Список диалогов</span>
        </div>
        <Button
          type="link"
          icon="form"
          className="chat__sidebar-new-dialog-btn"
          onClick={showModal}
        />
      </div>
      <Modal
        title="Начать беседу"
        visible={modalOpen}
        // onOk={toggleModal}
        onCancel={closeModal}
        footer={[
          <Button key="back" onClick={closeModal}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={disabled}
            onClick={addDialog}
            loading={isLoading}
          >
            Отправить
          </Button>,
        ]}
      >
        <Form size="small">
          <Form.Item required label="Введите email или имя собеседника">
            <Select
              showSearch
              loading={isSearching}
              showArrow={false}
              filterOption={false}
              style={{ width: '100%' }}
              placeholder="Введите email или имя собеседника"
              onSearch={onChangeNameValue}
              onChange={onSelectUser}
              notFoundContent={null}
            >
              {options}
            </Select>
          </Form.Item>
          <Form.Item required label="Введите сообщение">
            <Input.TextArea
              placeholder="Введите сообщение"
              autoSize={{ minRows: 3 }}
              value={textValue}
              onChange={onChangeTextValue}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Dialogs className="chat__sidebar-dialogs-bar" />
    </div>
  )
}
export default Sidebar
