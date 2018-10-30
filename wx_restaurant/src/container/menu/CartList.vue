<template>
  <div class="cartList">
    <!-- <p>this is cartlist</p> -->
    <!-- node-fetch -->
    <p><em @click="clearCart">清空购物车</em></p>
    <ul>
      <li v-for="(item, index) in cartData" :key="index">
        <div class="name_msg">
          <b>{{item.name}}</b><u></u>
        </div>
        <div class="num_msg">
          <em>￥{{item.price}}</em>
          <span v-if="item.count">
            <b @click="minusFn(item.name)">-</b>
            <u>{{item.count}}</u>
            <b @click="addFn(item.name)">+</b>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CartList',
  data () {
    return {
    }
  },
  mounted () {
    // console.log(this.cartData)
  },
  methods: {
    clearCart () {
      // console.log(this.cartData)
      // this.cartData = []
      this.clearCart()
    },
    addFn (obj) {
      // console.log(name)
      // console.log(obj)
      this.addNum(obj)
      // this.getCartData()
      // this.getTotalPrice()
    },
    minusFn (obj) {
      // console.log(name)
      this.minusNum(obj)
      // this.getCartData()
      // this.getTotalPrice()
    },
    ...mapActions({
      addNum: 'addNum',
      minusNum: 'minusNum',
      getCartData: 'getCartData',
      clearCart: 'clearCart',
      getTotalPrice: 'getTotalPrice'
    })
  },
  computed: {
    ...mapState({
      cartData: state => state.cartData,
      totalNum: state => state.totalNum
    })
  }
}
</script>
<style lang="scss" scoped>
.cartList {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: .6rem;
  background: #fff;
  p{
    width: 100%;
    height: .36rem;
    line-height: .36rem;
    text-align: right;
    border-bottom: 1px solid #ccc;
    em{
      color: #ccc;
      font-size: .18rem;
    }
  }
  ul{
    width: 100%;
    li{
      width: 100%;
      height: .5rem;
      padding: 0 .12rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name_msg{
        b{
          font-weight: bold;
          font-size: .2rem;
        }
      }
      .num_msg{
        display: flex;
        em{
          color: red;
          font-weight: bold;
          font-size: .18rem;
        }
        span{
          width: 1rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          b{
            width: .3rem;
            height: .3rem;
            text-align: center;
            line-height: .22rem;
            border-radius: 50%;
            border: 2px solid rgb(87, 180, 62);
            color: #666;
          }
          u{
            color: #333;
            font-size: .16rem;
          }
        }
      }
    }
  }
}
</style>
