import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginNews from "@/components/login/LoginNews"
import ListNews from "@/components/list/ListNews"
import PersinfoNews from "@/components/persinfo/PersinfoNews"
<<<<<<< HEAD






=======
>>>>>>> lxx
import Index from "@/components/index/Index"
import Details from "@/components/index/Details"
import Search from "@/components/index/Search"
import Red from '@/components/index/Red'
<<<<<<< HEAD

=======
>>>>>>> lxx


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
<<<<<<< HEAD

=======
>>>>>>> lxx
    },
    {
      path: '/news/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/news/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/news/search',
      name: 'Search',
      component: Search
<<<<<<< HEAD
    },
    {
    
=======
    },{
>>>>>>> lxx
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
    },{
	    path: '/Red',
      name: 'Red',
      component: Red
    },

  ]
})
