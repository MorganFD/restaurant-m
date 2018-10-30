<template>
  <div class="menu">
      <shop-name :shopMsg="seller"></shop-name>
      <menu-list :goodsData="goods"></menu-list>
      <cart-mask v-if="showCartList"></cart-mask>
      <menu-footer></menu-footer>
  </div>
</template>
<script>
import * as shopData from '@/assets/data/shop'
import Shopname from './ShopName'
import Menulist from './Menulist'
import MenuFooter from './MenuFooter'
import CartMask from './CartMask'
import { mapState } from 'vuex'
export default {
  name: 'Menu',
  data () {
    return {
      seller: shopData.MenuList.seller,
      goods: shopData.MenuList.goods
    }
  },
  mounted () {
    // console.log(shopData)
  },
  methods: {
  },
  components: {
    'shop-name': Shopname,
    'menu-list': Menulist,
    'menu-footer': MenuFooter,
    'cart-mask': CartMask
  },
  computed: {
    ...mapState({
      showCartList: state => state.showCartList
    })
  }
}
</script>
<style scoped>
.menu{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: .6rem;
}
</style>
