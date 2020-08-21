import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginNews from "@/components/login/LoginNews"
import ListNews from "@/components/list/ListNews"
import PersinfoNews from "@/components/persinfo/PersinfoNews"






import Index from "@/components/index/Index"
import Details from "@/components/index/Details"
import Search from "@/components/index/Search"
import Red from '@/components/index/Red'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      name: 'Red',
      component: Red
    },

  ]
})
