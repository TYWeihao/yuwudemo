import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import lingtankuangshan from '../views/lingtankuangshan.vue'
import huanjingbaohu from '../views/huanjingbaohu.vue'
import nenghaoshuangkong from '../views/nenghaoshuangkong.vue'
import zhongdianshebei from '../views/zhongdianshebei.vue'
import wasiguankong from '../views/wasiguankong.vue'
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
    }
  ]
})


export default router
