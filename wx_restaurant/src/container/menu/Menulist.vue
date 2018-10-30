<template>
  <div class="menulist">
    <!-- this is menulist -->
    <ul class="leftNav" ref="leftNav">
      <!-- :class="currentIndex === index ? 'active' : ''" -->
      <!-- @click="changeIndex(index)" -->
      <li v-for="(item, index) in goodsData" :key="index"
      :class="{'activeNav' : currentIndex === index}"
      @click="selectMenu(index, $event)"
      >{{item.name}}</li>
    </ul>
    <div class="rightList" ref="rightList">
      <ul>
        <li v-for="(item, index) in goodsData" :key="index" class="goodsItem" ref="goodsItem">
          <h3>{{item.name}}</h3>
          <menu-item :itemData="item.children" :goodsIndex="index"></menu-item>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Menuitem from './Menuitem'
import BScroll from 'better-scroll'
export default {
  name: 'Menulist',
  data () {
    return {
      heightArr: [],
      scrollY: 0
    }
  },
  components: {
    'menu-item': Menuitem
  },
  mounted () {
    // console.log(this.$refs.goodsItem)
    this.$nextTick()
      .then(this._initScroll)
  },
  methods: {
    changeIndex (ind) {
      console.log(ind)
    },
    _initScroll () {
      this.BSLeft = new BScroll(this.$refs['leftNav'], {
        click: true
      })
      this.BSRight = new BScroll(this.$refs['rightList'], {
        probeType: 3,
        click: true
      })
      this._calcHeight()
      this.BSRight.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(this.scrollY)
      })
    },
    _calcHeight () {
      let startH = 0
      let goodsItems = this.$refs['goodsItem']
      this.heightArr.push(startH)
      for (let i = 0; i < goodsItems.length; i++) {
        startH += goodsItems[i].clientHeight
        this.heightArr.push(startH)
      }
      // console.log(this.heightArr)
    },
    selectMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let goodsItems = this.$refs['goodsItem']
      let currentItem = goodsItems[index]
      this.BSRight.scrollToElement(currentItem, 100)
    }
  },
  props: {
    goodsData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.heightArr.length; i++) {
        let height1 = this.heightArr[i]
        let height2 = this.heightArr[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
    // currentIndex () {
    //   let current = this.heightArr.findIndex(item => item >= this.scrollY)
    //   current = (current === -1) ? this.heightArr.length : current
    //   current = current && (current - 1)
    //   return current
    // }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/common.scss';
.menulist{
  @include wh(100%, 100%);
  display: flex;
  overflow: hidden;
}
.leftNav{
  width: .8rem;
  height: 100%;
  border-right: 1px solid #ccc;
  background: #ddd;
  li{
    @include wh(.8rem, .8rem);
    line-height: .6rem;
    text-align: center;
    font-size: .16rem;
    padding: .05rem;
    border-bottom: 1px solid #ccc;
    &:first-of-type{
      line-height: 2;
    }
  }
}
.activeNav{
  background: #fff;
}
.rightList{
  flex: 1;
  height: auto;
  ul{
    li{
      width: 100%;
      h3{
        @include wh(100%, .36rem);
        text-indent: .2rem;
        border-left: 3px solid rgb(79, 247, 79);
        line-height: .36rem;
        font-size: .18rem;
      }
    }
  }
}
</style>
