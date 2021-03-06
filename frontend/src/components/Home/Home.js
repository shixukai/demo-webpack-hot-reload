import React from 'react'
import styles from './styles.scss'
import { Link } from 'react-router'
// import moment from 'moment'

class Home extends React.Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // custom console
    // console.log(moment().format())
  }

  render () {
    return (
      <div className={styles.Home}>Home
        <Link to='/test'>test hot reload</Link>
        <div>
          <Link to='/weather'>weather</Link>
        </div>
        <div>
          <Link to='/pixitest'>PixiTest</Link>
        </div>
        <div className={styles.triangle}>
        </div>
      </div>
    )
  }
}

export default Home
