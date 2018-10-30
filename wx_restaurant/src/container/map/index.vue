<template>
  <div class="nearByShop">
    <!-- <p>this is nearByShop</p> -->
    <!-- <div class="header">
      <i class="icon iconfont icon-xiangzuo"></i>
      <span>附近的店</span>
      <em></em>
    </div> -->
    <near-by-header></near-by-header>
    <div class="nearByShopList">
      <ul>
        <router-link tag="li" v-for="(item, index) in nearByShopData" :key="index"
          :to="{name: 'mapshop', params: item}"
        >
          <h3>
            <em></em>
            <span>{{item.title}}</span>
            <em>{{item._distance}}米</em>
          </h3>
          <p>{{item.category}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import NearByHeader from './NearByHeader'
export default {
  name: 'NearByShop',
  data () {
    return {
    }
  },
  components: {
    'near-by-header': NearByHeader
  },
  mounted () {
    const geoLocation = new qq.maps.Geolocation('GJJBZ-QUIWX-AOJ4V-733NI-P7I6S-NGFB4', 'myapp')
    geoLocation.getLocation((pos) => {
      console.log(pos)
      // 40.041152, 116.300325
      this.initNearBy(`http://47.94.7.105:8082/api/location?lat=${pos.lat}&lng=${pos.lng}`)
    })
  },
  methods: {
    initNearBy (url) {
      this.getNearByShopData(url)
    },
    ...mapActions({
      getNearByShopData: 'getNearByShopData'
    })
  },
  computed: {
    ...mapState({
      nearByShopData: state => state.nearByShopData
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.nearByShop{
  @include wh(100%, 100%);
  display: flex;
  flex-direction: column;
}
.nearByShopList{
  flex: 1;
  overflow: scroll;
  ul{
    width: 100%;
    li{
      width: 100%;
      height: .8rem;
      border-bottom: 1px solid #ccc;
      h3{
        @include wh(100%, .5rem);
        padding: 0 .1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        em{
          font-size: .16rem;
        }
        span{
          font-size: .2rem;
          font-weight: bold;
        }
      }
      p{
        @include wh(100%, .3rem);
        text-align: center;
        line-height: .3rem;
        font-size: .16rem;
      }
    }
  }
}
</style>
