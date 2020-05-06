import React from 'react'
import { Form } from 'antd'
import { Button, Block, FormField } from 'components'
import { Link } from 'react-router-dom'

const LoginForm = ({ formParams, isLoading }) => {
  return (
    <>
      <div className="auth__top">
        <h2 className="auth__title">Войти в аккаунт</h2>
        <p className="auth__subtitle">Пожауйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={formParams.handleSubmit} className="login-form">
          <FormField
            name="email"
            placeholder="Введите e-mail"
            icon="mail"
            formParams={formParams}
          />
          <FormField
            name="password"
            placeholder="Введите пароль"
            icon="lock"
            type="password"
            formParams={formParams}
          />

          <Form.Item>
            <Button
              type="primary"
              loading={isLoading}
              htmlType="submit"
              className="button_large auth__button"
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link to="/signup" className="auth__register-link">
            Зарегестрироваться
          </Link>
        </Form>
      </Block>
    </>
  )
}
const WrappedNormalLoginForm = Form.create({ name: 'LoginForm' })(LoginForm)
export default WrappedNormalLoginForm
