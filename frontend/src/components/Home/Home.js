import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { Link } from 'react-router';

class Home extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.Home}>Home
        <Link to='test'>test link</Link>
        <div className={styles.triangle}>
        </div>
      </div>
    );
  }
}

export default Home;
