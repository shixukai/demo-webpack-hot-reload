import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { Link } from 'react-router';
import { BrowserRouter } from 'react-router';
import { connect } from 'react-redux'
import { HomeActions } from 'frontend/src/actions'

@connect(
  (state) => {
    return({
      testResult: state.home.get("testResult"),
    })
  },
  { ...HomeActions }
)

class Home extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.test();
  }

  render() {
    return (
      <div className={styles.Home}>Home
        <Link to='/test'>test link</Link>
        <div className={styles.triangle}>
        </div>
      </div>
    );
  }
}

export default Home;
