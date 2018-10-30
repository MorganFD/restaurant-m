// whatwg-fetch的兼容(做不同浏览器和浏览器高低版本的兼容)
import 'whatwg-fetch'
// fetch-jsonp 用来使fetch方法支持跨域
import fetchJsonp from 'fetch-jsonp'
// 字符串转为地址栏参数forEach方法
// const json2url = (params) => {
//   let arr = []
//   Object.keys(params).forEach((item)=> {
//     arr.push(`${item}=${params[item]}`)
//   })
//   return arr.join('&')
// }
// 数组的reduce方法（累加）将字符串转为地址栏参数
const json2url = (params) => {
  return Object.keys(params).reduce((pre, key) => (`${pre}${key}=${params[key]}&`), '').slice(0, -1)
  // 如果此处reduce第二个参数不给空字符串的话，pre只会取到第一个key
}
// console.log(json2url({user: 'zhangsan', pwd: '123'}))
// 封装发起请求的方法(无try...catch降级处理)
const sendReq = (url, options) => new Promise((resolve, reject) => {
  return fetch(url, options).then((res) => {
    if (res.ok) {
      resolve(res.json())
    } else {
      reject(res)
    }
  })
})
// 封装发起请求的方法(带try...catch降级处理)
//  定义判断状态码的函数
// const judgeCode = (code) => {
//   switch (code) {
//     case '404':
//       return {
//         errCode: code,
//         errMsg: 'not found'
//       }
//     case '500':
//       return {
//         errCode: code,
//         errMsg: 'server error'
//       }
//     default:
//       return 'something wrong'
//   }
// }
// const sendReq = (url, options) => new Promise((resolve, reject) => {
//   return fetch(url, options).then((res) => {
//     try {
//       if (res.ok) {
//         resolve(res.json())
//       } else {
//         const errState = judgeCode(res.status)
//         reject(errState)
//       }
//     } catch (e) {
//       resolve({
//         errCode: 'infinity',
//         errMsg: 'unknown error'
//       })
//     }
//   })
// })
// 设置请求头
let reqHeaders = {
  Accept: 'text/json'
}
// 根据method不同选择对应的请求方式
export default {
  get (url, params) {
    return sendReq(url + `?${json2url(params)}`, {
      method: 'GET',
      headers: reqHeaders
    })
  },
  post (url, params) {
    return sendReq(url, {
      method: 'POST',
      headers: Object.assign({}, reqHeaders, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: json2url(params)
    })
  },
  jsonp (url, params) {
    return fetchJsonp(url + `?${json2url(params)}`, {
      jsonpCallback: 'jsonp_cb'
    }).then((res) => res.json())
  }
}
