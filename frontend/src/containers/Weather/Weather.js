import React, { PropTypes } from 'react'
import styles from './styles.scss'
import { callApi } from 'frontend/src/middleware/api.js'

class Weather extends React.Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
    // this.callWeatherApi = this.callWeatherApi.bind(this)

  // console.log('%c [show-log-this]', 'background: #5EBB51; color: yellow', this);
    this.state = {}
  }

  componentDidMount () {
    this._callWeatherApi()
    this.testFunction()
  }

  async _callWeatherApi () {
    console.log('this', this)
    try {
      const res = await callApi('http://api.openweathermap.org/data/2.5/weather?q=Tai%20Wo%20Hau&appid=ab21b8f814629480b964369f72fb2d70')
      this.setState({res: res})
    } catch (e) {
      console.log(e)
    }
  }

  testFunction = () => {
    this.setState({lalal: 'asdfa'})
  }

  render () {
    return (
      <div className={styles.Weather}>
        <div className={styles.title}>
          current weather at your lo  cation
        </div>
        <div className={styles.cityName}>
          {/* { this.state.weatherInfo.main.temp } */}
        </div>
        <div className={styles.temp}>
          {/* { this.state.temp } */}
        </div>
      </div>
    )
  }
}

export default Weather
