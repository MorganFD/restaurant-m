<template>
  <div class="header">
    <i class="icon iconfont icon-xiangzuo" @click="backFn"></i>
    <span>附近的店</span>
    <em></em>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    backFn () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  width: 100%;
  height: .6rem;
  padding:0 .1rem;
  background: rgb(87, 180, 62);
  display: flex;
  justify-content: space-between;
  align-items: center;
  i.icon{
    font-size: .2rem;
    color: #fff;
  }
  span{
    color: #fff;
    font-size: .26rem;
  }
}
</style>
