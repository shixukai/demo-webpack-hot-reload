import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import api from 'frontend/src/middleware/api'
import rootReducer from 'frontend/src/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk, api),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('frontend/src/reducers', () => {
      const nextRootReducer = require('frontend/src/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
