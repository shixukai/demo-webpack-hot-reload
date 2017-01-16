// import { isIE } from 'src/Utils/Utils';
import 'whatwg-fetch'

export default ({ dispatch, getState }) => next => action => {
  const { endPoint, fetchInit, types, ...rest } = action

  if (!endPoint) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILED] = types
  next({ ...rest, type: REQUEST })

  // 整个middleware 直接返回promise， 方便异步处理结果
  return callApi(endPoint, fetchInit).then(
    (successData) => {
      console.log(successData)
      next({ ...rest, type: SUCCESS, result: successData })
      return successData
    },
    (failData) => {
      let finalFailData = failData
      // 整合错误提示
      const errorMessages = Object.values(failData.error || {}).map(
        (errors) => {
          return errors.join()
        }
      ).join()
      finalFailData = { ...failData, msg: failData.msg + ' ' + errorMessages }

      console.log(finalFailData)
      next({ ...rest, type: FAILED, result: finalFailData })
      return failData
    }
  )
}

export function callApi (endPoint, fetchInit = {}) {
  let finalFetchInit = fetchInit
  const url = endPoint

  let myHeaders = null
  // if (isIE()) {
    // myHeaders = { 'Content-Type': 'text/plain' }
  // } else {
  myHeaders = new Headers()
  myHeaders.append('Content-Type', 'text/plain')
  // }

  finalFetchInit = { ...fetchInit, headers: myHeaders }

  console.log('[show-log-finalFetchInit]', finalFetchInit)
  console.log('[show-log-url]', url)

  return fetch(url, finalFetchInit).then(
    (res) => {
      // console.log('[show-log-res]', res);
      if (res.ok) {
        return res.json().then(
          (data) => {
            // 服务器返回结果不是预期结果
            if (data.isSuccess === '0') {
              return Promise.reject(data)
            }
            return (data)
          }
        )
      } else {
        console.log('response status is not ok:', new Error(res.statusText))
        return res.json().then(
          (data) => {
            return Promise.reject(data)
          }
        )
      }
    },
    (error) => {
      console.error('Fetch error: ' + error.msg)
      return Promise.reject(new Error('请求失败'))
    }
  )
}
