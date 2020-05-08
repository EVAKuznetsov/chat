import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Auth, Home } from 'pages'

function App() {
  const { isAuth } = useSelector(state => state.auth)

  return (
    <div className="wrapp">
      <Route
        exact
        path="/"
        render={() =>
          !isAuth ? <Redirect to="/signIn" /> : <Redirect to="/chat" />
        }
      />
      <Route
        path={['/signin', '/signup', '/verify']}
        render={() => (!isAuth ? <Auth /> : <Redirect to="/chat" />)}
      />
      <Route
        path={'/chat'}
        render={() => (isAuth ? <Home /> : <Redirect to="/signIn" />)}
      />
    </div>
  )
}

export default App
