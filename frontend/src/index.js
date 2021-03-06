import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'frontend/src/root'
import { AppContainer } from 'react-hot-loader'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'frontend/src/store/configureStore'
import createHistory from 'history/createBrowserHistory'
const store = configureStore()
const browserHistory = createHistory()
const history = syncHistoryWithStore(browserHistory, store)

const mountApp = document.getElementById('container')

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>, mountApp
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('frontend/src/root', () => {
    const NewRoot = require('frontend/src/root').default
    ReactDOM.render(
         <AppContainer>
            <NewRoot store={store} history={history}/>
         </AppContainer>,
         mountApp
       )
  })
}
