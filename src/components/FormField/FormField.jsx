import React from 'react'
import { Form, Input, Icon } from 'antd'

const FormField = ({ name, placeholder, icon, type, formParams }) => {
  const { touched, errors, handleChange, handleBlur, values } = formParams
  return (
    <Form.Item
      hasFeedback
      validateStatus={!touched[name] ? '' : errors[name] ? 'error' : 'success'}
      help={touched[name] && errors[name] ? errors[name] : null}
    >
      {type === 'password' ? (
        <Input.Password
          size="large"
          prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          name={name}
        />
      ) : (
        <Input
          size="large"
          prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          name={name}
        />
      )}
    </Form.Item>
  )
}

export default FormField
