import React from 'react'
import { Form, Input, Icon } from 'antd'
import { Button, Block } from 'components'
import { Link } from 'react-router-dom'

const LoginForm = props => {
	const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props
	return (
		<>
			<div className="auth__top">
				<h2 className="auth__title">Войти в аккаунт</h2>
				<p className="auth__subtitle">Пожауйста, войдите в свой аккаунт</p>
			</div>
			<Block>
				<Form onSubmit={handleSubmit} className="login-form">
					<Form.Item
						hasFeedback
						validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
						help={touched.email && errors.email ? errors.email : null}
					>
						<Input
							size="large"
							prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Введите e-mail"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							name="email"
						/>
					</Form.Item>
					<Form.Item
						hasFeedback
						validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
						help={touched.password && errors.password ? errors.password : null}
					>
						<Input.Password
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							name="password"
							size="large"
							placeholder="Введите пароль"
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="button_large auth__button">
							Войти в аккаунт
						</Button>
					</Form.Item>
					<Link to="/register" className="auth__register-link">
						Зарегестрироваться
					</Link>
				</Form>
			</Block>
		</>
	)
}
const WrappedNormalLoginForm = Form.create({ name: 'LoginForm' })(LoginForm)
export default WrappedNormalLoginForm
