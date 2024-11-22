import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import lingtankuangshan from '../views/lingtankuangshan.vue'
import huanjingbaohu from '../views/huanjingbaohu.vue'
import nenghaoshuangkong from '../views/nenghaoshuangkong.vue'
import zhongdianshebei from '../views/zhongdianshebei.vue'
import wasiguankong from '../views/wasiguankong.vue'
import tanpaishuangkong from '../views/tanpaishuangkong.vue'
import mapLayer from '../views/mapLayer.vue'
import login from '../views/login.vue'
const router = createRouter({
  // base: '/aiapp/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/lingtankuangshan',
      name: 'lingtankuangshan',
      component: lingtankuangshan
    },
    {
      path: '/huanjingbaohu',
      name: 'huanjingbaohu',
      component: huanjingbaohu
    },
    {
      path: '/nenghaoshuangkong',
      name: 'nenghaoshuangkong',
      component: nenghaoshuangkong
    },
    {
      path: '/zhongdianshebei',
      name: 'zhongdianshebei',
      component: zhongdianshebei
    },
    {
      path: '/wasiguankong',
      name: 'wasiguankong',
      component: wasiguankong
    },
    {
      path: '/mapLayer',
      name: 'mapLayer',
      component: mapLayer
    },
    {
      path: '/tanpaishuangkong',
      name: 'tanpaishuangkong',
      component: tanpaishuangkong
    }
  ]
})


export default router
