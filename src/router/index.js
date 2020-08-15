import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginNews from "@/components/login/LoginNews"
import ListNews from "@/components/list/ListNews"
import PersinfoNews from "@/components/persinfo/PersinfoNews"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news/login',
      name: 'LoginNews',
      component: LoginNews
    },
    {
      path: '/news/list',
      name: 'ListNews',
      component: ListNews
    },
    {
      path: '/news/persinfo',
      name: 'PersinfoNews',
      component: PersinfoNews
    },

  ]
})