import React, { PropTypes } from 'react';
import styles from './styles.scss';

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
        <div className={styles.triangle}></div>

      </div>
    );
  }
}

export default Home;
