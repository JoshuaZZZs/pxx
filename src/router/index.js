import Vue from 'vue'
import VueRouter from 'vue-router'
import homeChildren from './homeChildren'

Vue.use(VueRouter)
//项目一级路由
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      desc: '首页',
      icon: 'wap-home-o'
    },
    component: () => import('views/Home/index'),
    children: homeChildren
  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      desc: '搜索',
      icon: 'search'
    },
    component: () => import('views/Search/index')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: {
      desc: '消息',
      icon: 'chat-o'
    },
    component: () => import('views/Chat/index')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    meta: {
      desc: '推荐',
      icon: 'award-o'
    },
    component: () => import('views/Recommend/index')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      desc: '我的',
      icon: 'user-circle-o'
    },
    component: () => import('views/User/index')
  }
]
//项目二级路由
//const homeMenu = [{}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router