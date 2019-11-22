import RegisterForm from '../components/registerForm'
import { withFormik } from 'formik'

export default withFormik({
	validate: values => {
		const errors = {}

		//email valid
		if (!values.email) {
			errors.email = 'Введите ваш e-mail'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Введите корректный e-mail'
		}
		//name valid
		if (!values.name) {
			errors.name = 'Введите ваше имя'
		}
		//password valid
		if (!values.password) {
			errors.password = 'Введите пароль'
		} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)) {
			errors.password = 'Слишком лёгкий пароль'
		}

		//password valid
		if (!values.confirmPassword) {
			errors.confirmPassword = 'Введите пароль'
		} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.confirmPassword)) {
			errors.confirmPassword = 'Слишком лёгкий пароль'
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = 'Пароли не совпадают'
		}

		return errors
	},

	handleSubmit: (values, { setSubmitting, setTouched }) => {
		setTouched({ 'password': true })
		setTimeout(() => {
			alert(JSON.stringify(values))
			setSubmitting(false)
		}, 1000)
	},

	displayName: 'RegisterForm',
})(RegisterForm)
