// import { getData } from '../api/index'
import { MenuList } from '@/assets/data/shop.js'
import { menu2Storage, menuInStorage, assignCartList } from '@/utils/index.js'
export default {
  initShopData (context) {
    // context.commit('INITSELLER', MenuList.seller)
    // context.commit('INITGOODS', MenuList.goods)
    if (!localStorage.getItem('menu')) {
      context.commit('INITSHOPDATA', MenuList)
      context.commit('CARTDATA')
      context.commit('TOTALNUM')
      context.commit('TOTALPRICE')
    } else {
      let result = assignCartList(MenuList.goods, JSON.parse(localStorage.getItem('menu')))
      MenuList.goods = result
      context.commit('INITSHOPDATA', MenuList)
      context.commit('CARTDATA')
      context.commit('TOTALNUM')
      context.commit('TOTALPRICE')
    }
  },
  addNum (context, payload) {
    // console.log('payload', payload)
    // console.log(context)
    context.commit('ADDNUM', payload)
    context.commit('CARTDATA')
    context.commit('TOTALNUM')
    context.commit('TOTALPRICE')
    // console.log(menu2Storage(context.state.goods, payload))
    // let res = menuInStorage(menu2Storage(context.state.goods, payload))
    // console.log(res)
    menuInStorage(menu2Storage(context.state.goods, payload))
  },
  minusNum (context, payload) {
    // console.log('payload', payload)
    context.commit('MINUSNUM', payload)
    context.commit('CARTDATA')
    context.commit('TOTALNUM')
    context.commit('TOTALPRICE')
    // let res = menuInStorage(menu2Storage(context.state.goods, payload))
    // console.log(res)
    menuInStorage(menu2Storage(context.state.goods, payload))
  },
  // getCartData (context) {
  //   // console.log(context)
  //   // console.log('cartData', cartData)
  //   context.commit('CARTDATA')
  //   context.commit('TOTALPRICE')
  // },
  // getTotalPrice (context) {
  //   context.commit('TOTALPRICE')
  // }
  getShowCartList (context) {
    context.commit('SHOWCARTLIST')
  },
  // getNearByShopData (context, payload) {
  //   // Http.$http.get('http://47.94.7.105:8082/api/location').then((res) => {
  //   //   console.log(res)
  //   // })
  //   // getData
  // }
  getNearByShopData: async (context, payload) => {
    fetch(payload).then((res) => {
      // 'http://47.94.7.105:8082/api/location?lat=40.041152&lng=116.300325'
      return res.json()
    }).then((data) => {
      // console.log(data.result.pois)
      context.commit('NEARBYSHOPDATA', data.result.pois)
    })
    // console.log(resultNearBy)
  },
  clearCart (context) {
    context.commit('CLEARCART')
    context.commit('INITSHOPDATA', MenuList)
    context.commit('TOTALNUM')
    context.commit('TOTALPRICE')
  }
}
