export default {
	email: values => {
		if (!values.email) {
			return 'Введите ваш e-mail'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			return 'Введите корректный e-mail'
		}
	},
	name: values => {
		if (!values.name) {
			return 'Введите ваше имя'
		}
	},
	password: values => {
		if (!values.password) {
			return 'Введите пароль'
		} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)) {
			return 'Слишком лёгкий пароль'
		}
	},
	confirmPassword: values => {
		if (!values.confirmPassword) {
			return 'Введите пароль'
		} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.confirmPassword)) {
			return 'Слишком лёгкий пароль'
		} else if (values.password !== values.confirmPassword) {
			return 'Пароли не совпадают'
		}
	},
}
