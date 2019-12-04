import React from 'react'
import { Icon } from 'antd'

import { Messages, Status, ChatInput } from 'components'
import { Dialogs } from 'containers'
import itemsDialogs from 'data/dialogs'

import './home.sass'

const Home = () => {
	const itemsMessages = [
		{
			key: Math.random(),
			avatar: 'https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1',
			text: 'Hello!!!',
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:29:34',
			isMe: true,
			isChecked: true,
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1',
			text: "Hello !!! we'll never be together...  ",
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:34:34',
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1',
			text: 'Sorry... ',
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:40:34',
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1',
			text: 'Okay, beach',
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:46:34',
			isMe: true,
			attachment: [
				{ fileName: 'img-1', src: 'https://source.unsplash.com/100x100/?random=1&nature,water', key: 1 },
				{ fileName: 'img-2', src: 'https://source.unsplash.com/100x100/?random=2&girl', key: 2 },
				{ fileName: 'img-3', src: 'https://source.unsplash.com/100x100/?random=3&car', key: 3 },
				{ fileName: 'img-4', src: 'https://source.unsplash.com/100x100/?random=4&car', key: 4 },
				{ fileName: 'img-5', src: 'https://source.unsplash.com/100x100/?random=5&girl', key: 5 },
				{ fileName: 'img-6', src: 'https://source.unsplash.com/100x100/?random=3&car', key: 6 },
				{ fileName: 'img-7', src: 'https://source.unsplash.com/100x100/?random=4&car', key: 7 },
				{ fileName: 'img-8', src: 'https://source.unsplash.com/100x100/?random=5&girl', key: 8 },
				{ fileName: 'img-9', src: 'https://source.unsplash.com/100x100/?random=3&car', key: 9 },
				{ fileName: 'img-10', src: 'https://source.unsplash.com/100x100/?random=4&car', key: 10 },
				{ fileName: 'img-11', src: 'https://source.unsplash.com/100x100/?random=5&girl', key: 11 },
			],
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1',
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:46:34',
			isMe: true,
			attachment: [{ fileName: 'img-1', src: 'https://source.unsplash.com/200x200/?random=1&nature,water', key: 12 }],
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1',
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:48:34',
			audio: 'https://wav-sounds.com/wp-content/uploads/2017/09/Funny-04.wav',
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1',
			user: { fullName: 'Name' },
			date: 'Thu Nov 21 2019 13:48:34',
			audio: 'https://wav-sounds.com/wp-content/uploads/2017/09/Funny-04.wav',
			isMe: true,
		},
		{
			key: Math.random(),
			avatar: 'https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1',
			user: { fullName: 'Name' },
			isTyping: true,
		},
	]
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

					<Dialogs items={itemsDialogs} className="chat__sidebar-dialogs-bar" />
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
					<Messages items={itemsMessages} className="chat__dialog-content" />
					<ChatInput />
				</div>
			</div>
		</section>
	)
}

export default Home
