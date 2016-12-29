import React from 'react';
import { BrowserRouter } from 'react-router';
import { App } from 'frontend/src/containers/App';

class Root extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <App />
    );
  }
}

export default Root;
