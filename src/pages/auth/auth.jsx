import React from 'react'
import { LoginForm } from 'modules'
import { RegisterForm } from 'modules'
import { Route } from 'react-router-dom'

import './auth.sass'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'

const Auth = () => {
  return (
    <section className="auth">
      <Route exact path={['/', '/signin']} component={LoginForm} />
      <Route exact path="/signup" component={RegisterForm} />
      <Route path="/verify" component={VerifyEmail} />
    </section>
  )
}

export default Auth
