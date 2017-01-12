import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import routes from 'frontend/src/routes';
import styles from './styles.scss';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.otherThings}>something show in all site (app component)</div>
        {routes(this.props.store, this.props.history)}
      </div>
    );
  }
}

export default App;
