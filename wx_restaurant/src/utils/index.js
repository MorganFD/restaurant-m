/*
* created by Zh 2018-09-28
*/
// 将选中的菜品作数据的过滤后，返回一个即将存储到localstorage中的result
const menu2Storage = (goodsData, payload) => {
  // console.log(goodsData)
  let obj = {}
  // goodsData[payload.num].children.map((item, index) => {
  //   if (item.name === payload.name) {
  //     obj[item.name] = [item.count, item.price]
  //   }
  // })
  goodsData.map((item, index) => {
    item.children.map((itm, ind) => {
      if (itm.name === payload) {
        obj[itm.name] = [itm.count, itm.price]
      }
    })
  })
  // console.log(obj)
  return obj
}
// 将要存储到localstorage中的数据作合并然后存入本地存储
// let result = []
const menuInStorage = (cartList) => {
  // console.log(cartList)
  if (!localStorage.getItem('menu')) {
    // result.push(cartList)
    // console.log(result)
    localStorage.setItem('menu', JSON.stringify(cartList))
    return cartList
  } else {
    const oResult = JSON.parse(localStorage.getItem('menu'))
    // console.log(oResult)
    // oResult.forEach((item, index) => {
    //   if (item.name === cartList.name) {
    //     Object.assign(item, cartList)
    //   }
    // })
    Object.assign(oResult, cartList)
    localStorage.setItem('menu', JSON.stringify(oResult))
    return oResult
  }
}
// 将接口的cartList数据和本地存储的cartList数据做合并以达到购物车的效果
const assignCartList = (goods, storageCart) => {
  // console.log('goods', goods)
  // console.log('storageCart', storageCart)
  goods.forEach((item, index) => {
    item.children.forEach((itm, ind) => {
      if (Object.keys(storageCart).includes(itm.name)) {
        // console.log(itm)
        itm.count = storageCart[itm.name][0]
      }
    })
  })
  return goods
}
export {
  menu2Storage,
  menuInStorage,
  assignCartList
}
