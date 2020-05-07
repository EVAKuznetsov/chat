import React from 'react'

import { Messages, ChatInput, Status, Sidebar } from 'containers'
import './home.sass'

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <div className="chat__dialog-header-wrap">
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
