import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoginIndex from '@/pages/login/index.vue' 
import Home  from '@/pages/home'
import Chat  from '@/pages/chat'

import Game  from '@/pages/game'

import Article  from '@/pages/article'

import Login from '@/pages/login/login.vue' 

import Reg from '@/pages/login/reg.vue' 

import ErrorPage from '@/pages/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/loginindex',
      name: 'loginindex',
      component: LoginIndex,
      children:[
        {path:'/',name:"login",component:Login},
        {path:'reg',name:"reg",component:Reg}
        // {path:"/login",name:"login",component:Login}
        
      ]
    },
    {
      path:"*",
      name:"404",
      component:ErrorPage
    }
  ]
})
