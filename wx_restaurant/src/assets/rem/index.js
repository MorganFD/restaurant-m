// 获取屏幕宽度的方法
const getScreenWith = () => {
  return window.screen.width
}
// 获取屏幕rem值
const getRem = () => {
  return getScreenWith() / 10
}
export {
  getScreenWith,
  getRem
}
