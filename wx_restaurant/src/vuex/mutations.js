export default {
  INITSHOPDATA (state, payload) {
    // console.log('payload', payload)
    state.shopData = payload
    state.seller = payload.seller
    state.goods = payload.goods
  },
  // INITSELLER (state, payload) {
  //   state.seller = payload
  // },
  // INITGOODS (state, payload) {
  //   state.goods = payload
  // },
  ADDNUM (state, payload) {
    // console.log(payload)
    // state.goods[payload.num].children.map((item, index) => {
    //   if (item.name === payload.name) {
    //     item.count += 1
    //   }
    //   return item
    // })
    state.goods.map((item, index) => {
      item.children.map((itm, ind) => {
        if (itm.name === payload) {
          itm.count += 1
        }
        return itm
      })
    })
  },
  MINUSNUM (state, payload) {
    // console.log(state)
    // state.goods[payload.num].children.map((item, index) => {
    //   if (item.name === payload.name) {
    //     item.count -= 1
    //   }
    //   return item
    // })
    state.goods.map((item, index) => {
      item.children.map((itm, ind) => {
        if (itm.name === payload) {
          itm.count -= 1
        }
        return itm
      })
    })
  },
  CARTDATA (state) {
    let cartData = []
    state.goods.forEach((item, index) => {
      item.children.forEach((itm, ind) => {
        if (itm.count > 0) {
          cartData.push(itm)
          // return cartData
        }
      })
      return cartData
    })
    state.cartData = cartData
  },
  TOTALPRICE (state) {
    let totalPrice = 0
    state.cartData.forEach((item, index) => {
      totalPrice += item.count * item.price
    })
    state.totalPrice = totalPrice
  },
  TOTALNUM (state) {
    let totalNum = 0
    state.cartData.forEach((item, index) => {
      totalNum += item.count
    })
    state.totalNum = totalNum
  },
  SHOWCARTLIST (state) {
    state.showCartList = !state.showCartList
  },
  NEARBYSHOPDATA (state, payload) {
    state.nearByShopData = payload
  },
  CLEARCART (state) {
    state.cartData = []
  }
}
