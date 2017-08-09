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


import Me from '@/pages/me/me.vue'  //个人主页

import Sys from '@/pages/sys/sys.vue'  

import UserCenter from '@/pages/sys/usercenter.vue'  
  import myMsg from '@/pages/sys/myMsg.vue'  

import sysBase from '@/pages/sys/sysBase/sysBase.vue'
  import MyData from '@/pages/sys/sysBase/myData.vue' 
  import Avatar from '@/pages/sys/sysBase/avatar.vue'
  import Pass from '@/pages/sys/sysBase/pass.vue'
  import Bind from '@/pages/sys/sysBase/bind.vue' 

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

      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/sys',
      name: 'sys',
      component: Sys,
      children:[
        {path:'user',name:'user',component:UserCenter},
        {path:'myMsg',name:'myMsg',component:myMsg},
        {path:'sysBase',
          name:'usercenter',
          component:sysBase,
          children:[
            {path:'/',redirect:{name:'mydata'}},
            {path:'mydata',name:'mydata',component:MyData},
            {path:'avatar',name:'avatar',component:Avatar},
            {path:'pass',name:'pass',component:Pass},
            {path:'bind',name:'bind',component:Bind}
          ]
        }
      ]
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
