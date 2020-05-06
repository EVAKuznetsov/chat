import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../components/loginForm'
import { useFormik } from 'formik'
import validation from 'utils/validation'
import { signInRequest } from 'redux/actions/auth'

const LoginFormContainer = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)
  const handleSubmit = async (values, { setSubmitting }) => {
    await dispatch(signInRequest({ values }))
  }
  const validateForm = values => {
    const errors = validation({ isAuth: true, values })
    return errors
  }
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: handleSubmit,
    validate: validateForm,
  })
  return <LoginForm formParams={formik} isLoading={isLoading} />
}
export default LoginFormContainer
