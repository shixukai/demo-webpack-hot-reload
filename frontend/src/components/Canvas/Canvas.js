import React, { PropTypes } from 'react'
import styles from './styles.scss'

class Canvas extends React.Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={styles.Canvas}>
        Canvas
      </div>
    )
  }
}

export default Canvas
