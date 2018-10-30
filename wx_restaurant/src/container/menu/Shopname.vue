<template>
  <dl class="shopName" @click="switchToMap">
    <dt>
      <img src="../../assets/imgs/pic1.png" />
    </dt>
    <dd>
      <h3>{{shopMsg.name}}</h3>
      <p>{{shopMsg.description}}</p>
      <img src="../../assets/svgs/xiangyou.svg" alt="">
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'ShopName',
  data () {
    return {
      // shopData: this.props.shopData
    }
  },
  props: {
    shopMsg: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    // console.log(shopData)
    // console.log(this.shopData)
  },
  methods: {
    switchToMap () {
      this.$router.push('/nearbyshop')
    }
  }
}
</script>
<style lang="scss" scoped>
/* @import '../../css/common.scss' */
.shopName{
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  dt{
  width: .8rem;
  height: .8rem;
  img{
  width: 100%;
  height: 100%;
  }
  }
  dd{
    flex:1;
    margin-left: .2rem;
    position: relative;
    h3{
      color: #333;
      font-weight: bold;
      font-size: .18rem;
    }
    p{
      color: #666;
      font-size: .16rem;
    }
    img{
      position: absolute;
      top: .16rem;
      right: .2rem;
    }
  }
}
</style>
