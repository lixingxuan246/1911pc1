import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginNews from "@/components/login/LoginNews"
import ListNews from "@/components/list/ListNews"
import PersinfoNews from "@/components/persinfo/PersinfoNews"
<<<<<<< HEAD
import Index from "@/components/index/Index"
import Details from "@/components/index/Details"
import Search from "@/components/index/Search"
=======
import Red from '@/components/index/Red'
import Index from "@/components/index/Index";
import Details from "@/components/index/Details";
import Search from "@/components/index/Search";
>>>>>>> a846cc04c084d34c55fc2a59343f25f47c19c056


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
    },{
<<<<<<< HEAD
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/details',
      name: 'Details',
      component: Details
=======
      path: '/Red',
      name: 'Red',
      component: Red
>>>>>>> a846cc04c084d34c55fc2a59343f25f47c19c056
    }

  ]
})
