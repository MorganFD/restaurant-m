<template>
  <div class="menuItem" ref="menu_item">
      <dl v-for="(item, index) in itemData" :key="index">
        <dt><img src="../../assets/imgs/pic1.png" alt=""></dt>
        <dd>
          <h3>{{item.name}}</h3>
          <p v-if="item.describe">{{item.describe}}</p>
          <h5>
            <em><strong>￥{{item.price}}</strong>/元</em>
            <cart-control :itemData="item" :itemKey="goodsIndex"></cart-control>
          </h5>
        </dd>
      </dl>
  </div>
</template>
<script>
import CartControl from './cartControl'
export default {
  name: 'MenuItem',
  data () {
    return {
      // itemData: itemData
    }
  },
  components: {
    'cart-control': CartControl
  },
  props: {
    itemData: {
      type: Array,
      default () {
        return []
      }
    },
    goodsIndex: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  methods: {
  }
  // computed: {
  //   itemDataNew: function () {
  //     let newData = this.itemData.map((item, index) => {
  //       item.showBtn = true
  //       item.id = index + 1
  //       return item
  //     })
  //     return newData
  //   }
  // }
}
</script>
<style lang="scss">
@import '../../assets/css/common.scss';
.menuItem{
  @include wh(100%, 100%);
}
.menuItem dl{
  @include wh(100%, 1.2rem);
  padding: .1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  dt{
    @include wh(.6rem, .6rem);
    img{
      @include wh(100%, 100%);
    }
  }
  dd{
    flex: 1;
    margin-left: .2rem;
    h3{
      width: 1.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .18rem;
      font-weight: bold;
      line-height: 1.5;
    }
    p{
      width: 1.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .16rem;
      line-height: 2;
    }
    h5{
      display: flex;
      justify-content: space-between;
      align-items: center;
      em {
        color: #ccc;
        font-size: .14rem;
        strong{
          color: rgb(156, 36, 36);
          font-size: .18rem;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
