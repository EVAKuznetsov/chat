import React from 'react'
import { Form, Input, Icon } from 'antd'
import { Button, Block } from 'components'
import { Link } from 'react-router-dom'

const LoginForm = props => {
	const { getFieldDecorator } = props.form

	const handleSubmit = e => {
		e.preventDefault()
		props.form.validateFields((err, values) => {
			if (!err) {
				// console.log('Отправленные данные:  ', values)
			}
		})
	}

	return (
		<>
			<div className="auth__top">
				<h2 className="auth__title">Войти в аккаунт</h2>
				<p className="auth__subtitle">Пожауйста, войдите в свой аккаунт</p>
			</div>
			<Block>
				<Form onSubmit={handleSubmit} className="login-form">
					<Form.Item hasFeedback>
						{getFieldDecorator('email', {
							rules: [
								{
									type: 'email',
									message: 'Введённые данные не являются E-mail!',
								},
								{
									required: true,
									message: 'Введите Ваш E-mail!',
								},
							],
						})(<Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
					</Form.Item>
					<Form.Item hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: 'Введите Ваш пароль',
								},
								{
									min: 8,
									message: 'Пароль слишком короткий',
								},
							],
						})(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />)}
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
