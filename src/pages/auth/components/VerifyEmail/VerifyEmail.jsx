import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Result, Button, Spin } from 'antd'
import { Block } from 'components'
import { verifyRequest } from 'redux/actions/verify'

const VerifyEmail = ({ location, history }) => {
  const dispatch = useDispatch()
  const hash = location.search.split('hash=')[1]
  const { isChecking, error, verifyed } = useSelector(state => state.verify)

  useEffect(() => {
    if (hash) {
      dispatch(verifyRequest(hash))
    }
  }, [hash, dispatch])

  const renderVerifyInfo = () => {
    if (hash) {
      if (verifyed) {
        return {
          status: 'success',
          title: 'Готово!',
          text: 'Почта подтверждена.',
        }
      } else {
        return {
          status: 'error',
          title: 'Ошибка!',
          text: error,
        }
      }
    } else {
      return {
        status: 'info',
        title: 'Подтвердите почту',
        text:
          'На вашу почту отправленно письмо с ссылкой на подтверждение аккаунта.',
      }
    }
  }
  let info = renderVerifyInfo()
  return (
    <Block>
      {!isChecking ? (
        <Result
          status={info.status}
          title={info.title}
          subTitle={info.text}
          extra={
            verifyed && (
              <Button
                type="primary"
                key="console"
                onClick={() => history.push('/signin')}
              >
                Войти
              </Button>
            )
          }
        />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      )}
    </Block>
  )
}

export default VerifyEmail
