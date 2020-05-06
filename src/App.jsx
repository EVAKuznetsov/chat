import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Auth, Home } from 'pages'

function App() {
  const { isAuth } = useSelector(state => state.auth)

  return (
    <div className="wrapp">
      {/* {isAuth && <Redirect to="/" />} */}
      <Route
        exact
        path={['/signin', '/signup', '/verify']}
        render={() => (!isAuth ? <Auth /> : <Redirect to="/" />)}
      />
      <Route
        // exact
        path={'/'}
        render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
      />
    </div>
  )
}

export default App
