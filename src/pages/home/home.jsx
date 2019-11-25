import React from 'react'

import { Message, DialogsItem, Button } from 'components'

import './home.sass'

const Home = () => {
	return (
		<section className="home">
			<div className="home__dialogs">
				<DialogsItem
					key="32"
					user={{
						fullName: 'Аня',
						avatar: 'https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1',
						online: true,
					}}
					message={{
						text: 'we must to speak... we must to speak we must to speak we must to speak',
						date: 'Thu Nov 25 2019 13:29:34',
						isMe: false,
					}}
					unReaded={2}
				/>
				<DialogsItem
					key="33"
					user={{
						fullName: 'Руся',
						avatar: 'https://sun9-69.userapi.com/c834302/v834302074/124ad6/rAuHrrn33uE.jpg?ava=1',
						online: false,
					}}
					message={{
						text: 'All good!!!  goog good good good good',
						date: 'Thu Nov 25 2019 15:29:34',
						isChecked: false,
						isMe: true,
					}}
				/>
			</div>

			<div className="home__messages">
				<Message
					key="991"
					avatar="https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1"
					text="Hello!!!"
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:29:34"
					isMe
					isChecked
				/>
				<Message
					key="992"
					avatar="https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1"
					text="Hello !!! we'll never be together...  "
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:34:34"
				/>
				<Message
					key="993"
					avatar="https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1"
					text="Sorry... "
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:40:34"
				/>
				<Message
					key="994"
					avatar="https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1"
					text="Okay, beach"
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:46:34"
					isMe
					attachment={[
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
					]}
				/>
				<Message
					key="995"
					avatar="https://sun9-21.userapi.com/c625120/v625120380/3e6b1/lmmKQNWCn58.jpg?ava=1"
					user={{ fullName: 'Name' }}
					date="Thu Nov 21 2019 13:46:34"
					isMe
					attachment={[
						{ fileName: 'img-1', src: 'https://source.unsplash.com/200x200/?random=1&nature,water', key: 12 },
					]}
				/>
				<Message
					key="996"
					avatar="https://sun9-24.userapi.com/c858320/v858320734/b6fdf/O4EryOKubuU.jpg?ava=1"
					user={{ fullName: 'Name' }}
					isTyping
				/>
				<form action="#" className="home__message-input message-input">
					<div name="message-text" className="message-input__field" contentEditable></div>
					<Button type="submit" className="message-input__submit-btn">
						Send
					</Button>
				</form>
			</div>
		</section>
	)
}

export default Home
