import React from 'react'
import { Icon } from 'antd'

import { Dialogs, Messages, ChatInput, Status } from 'containers'

import './home.sass'

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div className="chat__sidebar-header-title">
              <Icon type="team" className="chat__sidebar-header-title-icon" />
              <span>Список диалогов</span>
            </div>
            <Icon type="form" className="chat__icon-antd" />
          </div>

          <Dialogs className="chat__sidebar-dialogs-bar" />
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <Status />
          </div>
          <Messages className="chat__dialog-content" />
          <ChatInput />
        </div>
      </div>
    </section>
  )
}

export default Home
