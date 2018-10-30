<template>
  <div class="cartMask" v-show="totalNum">
    <!-- <p>this is cartList</p> -->
    <cart-list></cart-list>
    <menu-footer></menu-footer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MenuFooter from './MenuFooter'
import CartList from './CartList'
export default {
  name: 'CartMask',
  data () {
    return {
    }
  },
  components: {
    'cart-list': CartList,
    'menu-footer': MenuFooter
  },
  computed: {
    ...mapState({
      totalNum: state => state.totalNum
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.cartMask{
  @include wh(100%, 100%);
  background: rgba(0, 0, 0, .3);
  position: fixed;
  left: 0;
  top: 0;
}
</style>
