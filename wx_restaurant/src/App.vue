<template>
  <div id="app">
    <bgsvg v-if="showLoading"></bgsvg>
    <loading v-if="showLoading"></loading>
    <router-view v-if="!showLoading"/>
  </div>
</template>
<script>
import Loading from './components/loading/index'
import Bgsvg from './components/loading/Bgsvg'
export default {
  name: 'App',
  data () {
    return {
      showLoading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showLoading = !this.showLoading
    }, 100)
  },
  components: {
    Loading,
    Bgsvg
  }
}
</script>
<style lang="scss">
@import './assets/css/globalStyle.scss';
@import './assets/css/common.scss';
@import './assets/fonts/iconfont.css';
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
