import RegisterForm from '../components/registerForm'
import { withFormik } from 'formik'
import validation from 'utils/validation'

export default withFormik({
	validate: values => {
		const errors = {}
		Object.keys(values).forEach(key => {
			errors[key] = validation[key] && validation[key](values)
		})
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
