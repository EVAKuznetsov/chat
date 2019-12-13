import React from 'react'
import { Icon } from 'antd'

import { Status } from 'components'
import { Dialogs, Messages, ChatInput } from 'containers'

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
						<div></div>
						<div className="chat__dialog-header-info">
							<div className="chat__dialog-header-username">Аня Марченко</div>
							<div className="chat__dialog-status">
								<Status online={false} />
							</div>
						</div>
						<Icon type="ellipsis" className="chat__icon-antd" />
					</div>
					<Messages className="chat__dialog-content" />
					<ChatInput />
				</div>
			</div>
		</section>
	)
}

export default Home
