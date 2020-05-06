import React, { useState, useEffect } from 'react'
import RegisterForm from '../components/registerForm'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import validation from 'utils/validation'
import { signUpRequest } from 'redux/actions/auth'

const RegisterFormContainer = props => {
  const dispatch = useDispatch()

  const [success] = useState(false)
  const { isLoading, waitingConfirmEmail } = useSelector(state => state.auth)

  useEffect(() => {
    if (waitingConfirmEmail) return props.history.push('/verify')
  }, [waitingConfirmEmail, props.history])
  const handleSubmit = values => {
    dispatch(signUpRequest({ values, history: props.history }))
  }
  const validateForm = values => {
    const errors = validation({ isAuth: false, values })
    return errors
  }
  const formParams = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: handleSubmit,
    validate: validateForm,
  })
  return (
    <RegisterForm
      formParams={formParams}
      success={success}
      isLoading={isLoading}
    />
  )
}

export default RegisterFormContainer
