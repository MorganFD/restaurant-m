import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/hello.vue'
import Menu from '@/container/menu/index'
import ShowView from '@/container/map/ShowView'
import NearByShop from '@/container/map/index'
import MapShop from '@/container/map/MapShop'
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/menu'
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/nearbyshop',
      name: 'View',
      redirect: '/nearbyshop/index',
      component: ShowView,
      children: [
        {
          path: '/nearbyshop/index',
          name: 'NearByShop',
          component: NearByShop
        },
        {
          path: '/nearbyshop/mapshop',
          name: 'mapshop',
          component: MapShop
        }
      ]
    }
  ]
})
export default router
