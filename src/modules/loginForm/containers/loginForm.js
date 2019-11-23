import LoginForm from '../components/loginForm'
import { withFormik } from 'formik'
import validation from 'utils/validation'

export default withFormik({
	mapPropsToValues: () => ({ email: '', password: '' }),
	validate: values => {
		const errors = validation({ isAuth: false, values })
		return errors
	},

	handleSubmit: (values, { setSubmitting }) => {
		window.location.replace('/im')
	},

	displayName: 'LoginForm',
})(LoginForm)
