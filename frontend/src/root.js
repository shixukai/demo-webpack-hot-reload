import React from 'react';
import routes from 'frontend/src/routes';
import { Router, browserHistory } from 'react-router';

class Root extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={browserHistory}>
        { routes }
      </Router>
    )
  }
}

export default Root;
