import React, { PropTypes } from 'react'
import styles from './styles.scss'

class TestPanel extends React.Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={styles.TestPanel}>
        <span>
          asdfasdf
        </span>
        TestPanel
      </div>
    )
  }
}

export default TestPanel
