import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // menu 点餐页
    shopData: {},
    seller: {},
    goods: {},
    cartData: [],
    totalPrice: 0,
    totalNum: 0,
    showCartList: false,
    // nearByShop 附近的店
    nearByShopData: {}
  },
  actions: actions,
  mutations: mutations
})
// console.log(actions)
// console.log(store)
store.dispatch('initShopData')
export default store
