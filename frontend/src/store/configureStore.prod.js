import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from 'frontend/src/middleware/api'
import rootReducer from 'frontend/src/reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api)
)

export default configureStore
