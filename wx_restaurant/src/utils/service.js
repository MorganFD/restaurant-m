import fetcher from './fetcher'
export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: fetcher
  })
}
