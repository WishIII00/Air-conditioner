import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserIndex from '@/components/Users/Index'
import UserShow from '@/components/Users/ShowUser'


import OrderlistCreate from '@/components/Orderlists/CreateOrderlist'
import OrderlistEdit from '@/components/Orderlists/EditOrderlist'
import OrderlistIndex from '@/components/Orderlists/Index'
import OrderlistShow from '@/components/Orderlists/ShowOrderlist'


import AirCreate from '@/components/Airs/CreateAir'
import AirEdit from '@/components/Airs/EditAir'
import AirIndex from '@/components/Airs/Index'
import AirShow from '@/components/Airs/ShowAir'




import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode:'history',
  
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },


    {
      path: '/orderlists',
      name: 'orderlists',
      component: OrderlistIndex
    },
    {
      path: '/orderlist/create',
      name: 'orderlist-create',
      component: OrderlistCreate
    },
    {
      path: '/orderlist/edit/:orderlistId',
      name: 'orderlist-edit',
      component: OrderlistEdit
    },
    {
      path: '/orderlist/:orderlistId',
      name: 'orderlist',
      component: OrderlistShow
    },


    {
      path: '/airs',
      name: 'airs',
      component: AirIndex
    },
    {
      path: '/air/create',
      name: 'air-create',
      component: AirCreate
    },
    {
      path: '/air/edit/:airId',
      name: 'air-edit',
      component: AirEdit
    },
    {
      path: '/air/:airId',
      name: 'air',
      component: AirShow
    },

    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },

  ]
})
