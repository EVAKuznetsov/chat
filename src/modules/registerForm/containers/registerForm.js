import RegisterForm from '../components/registerForm'
import { withFormik } from 'formik'
import validation from 'utils/validation'

export default withFormik({
	mapPropsToValues: () => ({ email: '', name: '', password: '', confirmPassword: '' }),
	validate: values => {
		const errors = validation({ isAuth: false, values })
		return errors
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values))
			setSubmitting(false)
		}, 1000)
	},

	displayName: 'RegisterForm',
})(RegisterForm)
