import React, { useState } from 'react'
import { Sidebar as SidebarBase } from 'components'
import userApi from 'utils/api/auth'
import dialogApi from 'utils/api/dialogs'
import showNotification from 'utils/helpers/showNotification'

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [usersList, setUsersList] = useState([])
  const [nameValue, setNameValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const [textValue, setTextValue] = useState('')

  const closeModal = () => {
    setModalOpen(false)
    setTextValue('')
    setNameValue('')
    setIsLoading(false)
    setIsSearching(false)
  }
  const showModal = () => {
    setModalOpen(true)
  }
  const onSelectUser = userId => {
    setSelectedValue(userId)
  }
  const onChangeNameValue = async value => {
    if (value.length > 0) {
      setIsSearching(true)
      try {
        const results = await userApi.findUsers(value)
        setUsersList(results.data.users)
        setNameValue(value)
      } catch (error) {}

      setIsSearching(false)
    } else {
      setUsersList([])
    }
  }
  const onChangeTextValue = e => {
    setTextValue(e.target.value)
  }
  const verifyToSendData = () => {
    return textValue.trim().length > 0 && selectedValue
  }
  const addDialog = async () => {
    if (!verifyToSendData) return null
    setIsLoading(true)
    try {
      await dialogApi.create({
        text: textValue,
        partner: selectedValue,
      })
      closeModal()
    } catch (error) {
      if (error.response.status === 403) {
        showNotification({
          type: 'error',
          title: 'Ошибка создания диалога!',
          text: error.response.data.message,
          delay: 4,
        })
      }
    }
    setIsLoading(false)
  }

  return (
    <SidebarBase
      closeModal={closeModal}
      showModal={showModal}
      modalOpen={modalOpen}
      textValue={textValue}
      isSearching={isSearching}
      isLoading={isLoading}
      usersList={usersList}
      nameValue={nameValue}
      disabled={!verifyToSendData()}
      onSelectUser={onSelectUser}
      onChangeNameValue={onChangeNameValue}
      onChangeTextValue={onChangeTextValue}
      addDialog={addDialog}
    />
  )
}

export default Sidebar
