import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'frontend/src/root';
import { App } from 'frontend/src/containers/App';
import { AppContainer } from 'react-hot-loader';

const mountApp = document.getElementById('container');

ReactDOM.render((
  <AppContainer>
    <Root />
  </AppContainer>
), mountApp);

if (module.hot) {
  module.hot.accept('frontend/src/root', () => {
    const NextRootContainer = require('frontend/src/root').default;

    ReactDOM.render((
      <AppContainer>
        <NextRootContainer />
      </AppContainer>
    ), mountApp);
  })
}
