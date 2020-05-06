import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { dialogsSaga, messagesSaga, authSaga, verifySaga } from './sagas'
import rootReduser from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middleware = sagaMiddleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(middleware))
)
sagaMiddleware.run(verifySaga)
sagaMiddleware.run(dialogsSaga)
sagaMiddleware.run(messagesSaga)
sagaMiddleware.run(authSaga)

export default store
