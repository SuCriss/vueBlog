import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/page/Home'
import about from '@/page/about'
import newList from '@/page/newList'
import share from '@/page/share'
import theme from '@/page/theme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/page/home',
      name:'Home',
      component:Home
    },
    {
      path:'/page/about',
      name:'about',
      component:about
    },
    {
      path:'/page/newList',
      name:'newList',
      component:newList
    },
    {
      path:'/page/share',
      name:'share',
      component:share
    },
    {
      path:'/page/theme',
      name:'theme',
      component:theme
    }
  ]
})
