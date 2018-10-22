/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Cloth from '../pages/Cloth/Cloth.vue'
import List from '../pages/List/List.vue'
import Login from '../pages/Login/Login.vue'
import Profile from '../pages/Profile/Profile.vue'
import Shoppingcart from '../pages/Shoppingcart/Shoppingcart.vue'


Vue.use(VueRouter)

export default new VueRouter ({
  //所有的路由

  routes: [
    {
      path: '/msite',
      component:Msite,

    },
    {
      path: '/cloth',
      component:Cloth,
    },
    {
      path:'/list',
      component:List,
    },
    {
      path:'/shoppingcart',
      component:Shoppingcart,
    },
    {
      path: '/login',
      component:Login,

    },
    {
      path:'/profile',
      component:Profile,
    },
    {
      path:'/',
      redirect:Msite,
    },

  ]
})
