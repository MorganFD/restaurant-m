<template>
  <div class="mapShop">
    <near-by-header></near-by-header>
    <iframe id="mapPage" width="100%" height="100%" frameborder=0
    :src="url"
    ></iframe>
  </div>
</template>
<script>
import NearByHeader from './NearByHeader'
export default {
  name: 'MapShop',
  data () {
    return {
      srcMap: 'https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:39.96554,116.26719;title:成都;addr:北京市海淀区复兴路32号院|coord:39.87803,116.19025;title:成都园;addr:北京市丰台区射击场路15号北京园博园|coord:39.88129,116.27062;title:老成都;addr:北京市丰台区岳各庄梅市口路西府景园六号楼底商|coord:39.9982,116.19015;title:北京园博园成都园;addr:北京市丰台区园博园内&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp'
    }
  },
  mounted () {
    console.log(this.url)
  },
  components: {
    'near-by-header': NearByHeader
  },
  computed: {
    url () {
      return `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${this.$route.params.location.lat},${this.$route.params.location.lng};title:${this.$route.params.title};addr:${this.$route.params.address}&key=GJJBZ-QUIWX-AOJ4V-733NI-P7I6S-NGFB4&referer=myapp`
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.mapShop{
  @include wh(100%, 100%);
  display: flex;
  flex-direction: column;
  iframe{
    flex: 1;
  }
}
</style>
