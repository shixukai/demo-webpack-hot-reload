import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import routes from 'frontend/src/routes';
import styles from './styles.scss';
console.log('[show-log-routes]', routes());


class App extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.otherThings}>something show in all site</div>
        {routes()}
      </div>
    );
  }
}

export default App;
