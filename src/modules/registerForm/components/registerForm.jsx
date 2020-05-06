import React from 'react'
import { Form } from 'antd'
import { Button, Block, FormField } from 'components'
import { Link } from 'react-router-dom'

const RegisterForm = ({ formParams, isLoading, success }) => {
  return (
    <>
      <div className="auth__top">
        <h2 className="auth__title">Регистрация</h2>
        <p className="auth__subtitle">Пожауйста, создайте свой аккаунт</p>
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
            name="fullName"
            placeholder="Введите имя"
            icon="user"
            formParams={formParams}
          />

          <FormField
            name="password"
            placeholder="Введите пароль"
            icon="lock"
            type="password"
            formParams={formParams}
          />
          <FormField
            name="confirmPassword"
            placeholder="Введите пароль"
            icon="lock"
            type="password"
            formParams={formParams}
          />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="button_large auth__button"
              loading={isLoading}
            >
              Создать аккаунт
            </Button>
          </Form.Item>
          <Link to="/signin" className="auth__register-link">
            Войти в аккаунт
          </Link>
        </Form>
      </Block>
    </>
  )
}
const WrappedNormalLoginForm = Form.create({ name: 'LoginForm' })(RegisterForm)
export default WrappedNormalLoginForm
