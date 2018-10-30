<template>
  <div class="menuFooter">
    <span>
      <b @click="changeShowCartList(showCartList)"><i class="icon iconfont icon-gouwuche"></i><u v-show="totalNum">{{totalNum}}</u></b>
      <em>￥{{totalPrice}}</em>
    </span>
    <button>选好了</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MenuFooter',
  data () {
    return {
    }
  },
  methods: {
    changeShowCartList (isShow) {
      this.getShowCartList()
    },
    ...mapActions({
      getShowCartList: 'getShowCartList'
    })
  },
  computed: {
    ...mapState({
      totalPrice: state => state.totalPrice,
      totalNum: state => state.totalNum,
      showCartList: state => state.showCartList
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/common.scss';
.menuFooter{
  @include wh(100%, .6rem);
  background: rgba(65, 60, 60, 0.76);
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  span{
    @include wh(70%, .6rem);
    display: inline-block;
    padding-left: .1rem;
    position: relative;
    b{
      @include wh(.6rem, .6rem);
      position:absolute;
      left: .1rem;
      top: -.15rem;
      i.icon{
        @include wh(100%, 100%);
        border-radius: 50%;
        background: rgb(79, 247, 79);
        color: rgba(65, 60, 60, 0.76);
        position: absolute;
        text-align: center;
        line-height: .6rem;
        font-size: .3rem;
        font-weight: bold;
      }
      u{
        width: .26rem;
        height: .26rem;
        border-radius: 50%;
        text-align: center;
        line-height: .26rem;
        font-size: .2rem;
        color: #fff;
        background: red;
        position: absolute;
        right: 0rem;
        top: 0rem;
      }
    }
    em{
      margin-left: .6rem;
      color: #fff;
      font-weight: bold;
      font-size: .2rem;
      line-height: .6rem;
    }
  }
  button{
    @include wh(30%, .6rem);
    border: 0;
    outline: 0;
    background: rgb(79, 247, 79);
    color: #fff;
    font-weight: bold;
    font-size: .2rem;
  }
}
</style>
