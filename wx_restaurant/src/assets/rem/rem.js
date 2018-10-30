import {
  getRem,
  getScreenWith
} from './index'
(function (doc, win) {
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const reCos = () => {
    if (!getScreenWith()) {
      return
    }
    doc.documentElement.style.fontSize = `${getRem()}px`
  }
  if (!doc.addEventListener) {
    return
  }
  win.addEventListener(resizeEvt, reCos)
  doc.addEventListener('DOMContentLoaded', reCos)
})(document, window)

// (function (doc, win) {
//   var docEl = doc.documentElement
//   var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
//   var recalc = function () {
//     var clientWidth = docEl.clientWidth
//     if (!clientWidth) { return }
//     if (clientWidth >= 750) {
//       docEl.style.fontSize = '100px'
//     } else {
//       docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
//     }
//   }
//   if (!doc.addEventListener) { return }
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)

// import { getScreenWidth, getRem } from './index'
// (function (doc, win) {
//   const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
//   const recal = () => {
//     const docEl = document.documentElement
//     const clientWidth = getScreenWidth()
//     if (!clientWidth) return
//     docEl.style.fontSize = `${getRem()}px`
//   }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvent, recal, false)
//   doc.addEventListener('DOMContentLoaded', recal, false)
// })(document, window)
