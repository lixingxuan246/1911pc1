import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginNews from "@/components/login/LoginNews"
import ListNews from "@/components/list/ListNews"
import PersinfoNews from "@/components/persinfo/PersinfoNews"
<<<<<<< HEAD
import Index from "@/components/index/Index";
import Details from "@/components/index/Details";
import Search from "@/components/index/Search";
import Red from "@/components/index/Red";
<<<<<<< HEAD
=======
import Index from "@/components/index/Index"
import Details from "@/components/index/Details"
import Search from "@/components/index/Search"
import Red from '@/components/index/Red'
>>>>>>> 4073da5869139607efc2448a79dce36ef127885b
=======
import Header from "@/components/Header";
import Footer from "@/components/Footer";
>>>>>>> sjp


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
    },
    {
      path: '/Red',
=======
    },{
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
>>>>>>> 4073da5869139607efc2448a79dce36ef127885b
      name: 'Red',
      component: Red
    },

  ]
})
