import React, { useState } from 'react'
import { Form, Input, Icon } from 'antd'
import { Button, Block } from 'components'
import { Link } from 'react-router-dom'

const LoginForm = props => {
	const [success] = useState(false)
	const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props

	// const handleSubmit = e => {
	// 	e.preventDefault()
	// 	props.form.validateFields((err, values) => {
	// 		if (!err) {
	// 			// console.log('Отправленные данные: ', values)
	// 			setSuccess(true)
	// 		}
	// 	})
	// }

	return (
		<>
			<div className="auth__top">
				<h2 className="auth__title">Регистрация</h2>
				<p className="auth__subtitle">Пожауйста, создайте свой аккаунт</p>
			</div>

			<Block>
				{success ? (
					<div className="auth__success-block">
						<Icon type="info-circle" theme="twoTone" className="auth__success-icon" />
						<h2 className="auth__success-title">Подтвердите свой аккаунт</h2>
						<p className="auth__success-subtitle">
							На вашу почту отправленно письмо с ссылкой на подтверждение аккаунта.
						</p>
					</div>
				) : (
					<Form onSubmit={handleSubmit} className="login-form">
						<Form.Item
							hasFeedback
							validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
							help={touched.email && errors.email ? errors.email : null}
						>
							<Input
								size="large"
								placeholder="Введите e-mail"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								name="email"
								prefix={
									<Icon
										type="mail"
										style={{
											color: 'rgba(0,0,0,.25)',
										}}
									/>
								}
							/>
						</Form.Item>
						<Form.Item
							hasFeedback
							validateStatus={!touched.name ? '' : errors.name ? 'error' : 'success'}
							help={touched.name && errors.name ? errors.name : null}
						>
							<Input
								size="large"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								name="name"
								prefix={
									<Icon
										type="user"
										style={{
											color: 'rgba(0,0,0,.25)',
										}}
									/>
								}
								placeholder="Введите имя"
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
								prefix={
									<Icon
										type="lock"
										style={{
											color: 'rgba(0,0,0,.25)',
										}}
									/>
								}
							/>
						</Form.Item>
						<Form.Item
							hasFeedback
							validateStatus={!touched.confirmPassword ? '' : errors.confirmPassword ? 'error' : 'success'}
							help={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null}
						>
							<Input.Password
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirmPassword}
								name="confirmPassword"
								size="large"
								placeholder="Введите пароль"
								prefix={
									<Icon
										type="lock"
										style={{
											color: 'rgba(0,0,0,.25)',
										}}
									/>
								}
							/>
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" className="button_large auth__button">
								Создать аккаунт
							</Button>
						</Form.Item>
						<Link to="/login" className="auth__register-link">
							Войти в аккаунт
						</Link>
					</Form>
				)}
			</Block>
		</>
	)
}
const WrappedNormalLoginForm = Form.create({ name: 'LoginForm' })(LoginForm)
export default WrappedNormalLoginForm
