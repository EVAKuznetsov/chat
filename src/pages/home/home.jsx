import React from 'react'
// import { Route } from "react-router-dom";

import { Message } from 'components'

import './home.sass'

const Home = () => {
	return (
		<div className="home">
			<div className="home__messages">
				<Message
					avatar="https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1"
					text="Hello!!!"
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:29:34"
					isMe
					isChecked
				/>
				<Message
					avatar="https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1"
					text="Hello !!! we'll never be together...  "
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:34:34"
				/>
				<Message
					avatar="https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1"
					text="Sorry... "
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:40:34"
				/>
				<Message
					avatar="https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1"
					text="Okay, beach"
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:46:34"
					isMe
					attachment={[
						{ fileName: '1', src: 'https://source.unsplash.com/100x100/?random=1&nature,water' },
						{ fileName: '1', src: 'https://source.unsplash.com/100x100/?random=2&girl' },
						{ fileName: '1', src: 'https://source.unsplash.com/100x100/?random=3&car' },
						{ fileName: '1', src: 'https://source.unsplash.com/100x100/?random=4&car' },
						{ fileName: '1', src: 'https://source.unsplash.com/100x100/?random=5&girl' },
					]}
				/>
			</div>
		</div>
	)
}

export default Home
