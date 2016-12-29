import React, { PropTypes } from 'react';
import { BrowserRouter } from 'react-router';
import { App } from 'frontend/src/containers/App';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;
