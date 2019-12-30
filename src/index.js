import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.sass'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Favicon from 'react-favicon'
import store from 'redux/store'

ReactDOM.render(
	<Provider store={store}>
		<Favicon url="/icon.png" />
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
