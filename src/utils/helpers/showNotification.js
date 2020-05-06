import { notification } from 'antd'

export default ({ type, text, title, duration = 3 }) =>
  notification[type]({
    message: title,
    description: text,
    duration,
  })
