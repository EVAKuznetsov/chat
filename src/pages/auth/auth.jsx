import React from 'react'
import { LoginForm } from 'modules'
import { RegisterForm } from 'modules'
import { Route } from 'react-router-dom'

import './auth.sass'

const Auth = () => {
	return (
		<section className="auth">
			<Route exact path={['/', '/login']} component={LoginForm} />
			<Route path="/register" component={RegisterForm} />
		</section>
	)
}

export default Auth
