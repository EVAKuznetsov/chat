export default ({ isAuth, values }) => {
  let errors = {}
  const rules = {
    email: values => {
      if (!values.email) {
        errors.email = 'Введите ваш e-mail'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Введите корректный e-mail'
      }
    },
    fullName: values => {
      if (!values.fullName) {
        errors.fullName = 'Введите ваше имя'
      }
    },
    password: values => {
      if (!values.password) {
        errors.password = 'Введите пароль'
      } else if (
        !isAuth &&
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)
      ) {
        errors.password = isAuth ? '' : 'Слишком лёгкий пароль'
      }
    },
    confirmPassword: values => {
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Введите пароль'
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Пароли не совпадают'
      }
    },
  }
  for (let key in values) {
    rules[key] && rules[key](values)
  }
  return errors
}
