<template>
  <em class="cartControl">
    <!-- <span v-if="itemData.count">
      <b @click="minusFn({ 'name': itemData.name, 'num': itemKey})">-</b>
      <u>{{itemData.count}}</u>
      <b @click="addFn({ 'name': itemData.name, 'num': itemKey})">+</b>
    </span> -->
    <span v-if="itemData.count">
      <b @click="minusFn(itemData.name)">-</b>
      <u>{{itemData.count}}</u>
      <b @click="addFn(itemData.name)">+</b>
    </span>
    <i v-if="!itemData.count" @click="changeShowBtn(itemData.name)">选规格</i>
  </em>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartControl',
  data () {
    return {
    }
  },
  props: {
    itemData: {
      type: Object,
      default () {
        return {}
      }
    },
    itemKey: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  methods: {
    changeShowBtn (obj) {
      // console.log(ind)
      // this.itemDataNew.map((item, index) => {
      //   if (item.id === ind) {
      //     // console.log(666)
      //     item.showBtn = !item.showBtn
      //     console.log(item.showBtn)
      //   }
      //   return item
      // })
      // return this.itemDataNew
      // this.itemData.count = 1
      // console.log(this.itemData)
      this.addNum(obj)
      // this.getCartData()
      // this.getTotalPrice()
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
      getTotalPrice: 'getTotalPrice'
    })
  }
}
</script>
<style lang="scss" scoped>
.cartControl{
  width: 1rem;
  height: .36rem;
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
  i{
      width: .8rem;
      height: .3rem;
      display: inline-block;
      color: #fff;
      background: rgb(87, 180, 62);
      text-align: center;
      line-height: .3rem;
      border-radius: .2rem;
      font-size: .16rem;
    }
}
</style>
