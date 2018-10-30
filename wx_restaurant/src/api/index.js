import http from '@/utils/fetcher'
const getData = (url, param) => {
  return http.get(url, {}).then((res) => res)
}
export {
  getData
}
