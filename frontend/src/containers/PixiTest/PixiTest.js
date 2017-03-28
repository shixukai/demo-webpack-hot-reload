import React, { PropTypes } from 'react'
import styles from './styles.scss'

class PixiTest extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.PixiTest}>
        PixiTest
      </div>
    )
  }
}

export default PixiTest
