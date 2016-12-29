import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'frontend/src/root';
import { App } from 'frontend/src/containers/App';
import { AppContainer } from 'react-hot-loader';

const mountApp = document.getElementById('container');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('container')
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('frontend/src/root', () => {
    const NewApp = require('frontend/src/root').default
    render(NewApp)
  });
}
