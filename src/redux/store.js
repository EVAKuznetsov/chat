import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { dialogsSaga, messagesSaga } from './sagas'
import rootReduser from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(...middleware))
)
sagaMiddleware.run(dialogsSaga)
sagaMiddleware.run(messagesSaga)
export default store
