/*
* 路由器模块， 进行配置路由。
*
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'


//声明式使用
Vue.use(VueRouter)

export default new VueRouter({
  //  配置n个路由对象
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      // 嵌套路由, 是一个数组
      children: [
        {
          path: '/home/news',    /*   path最左侧的斜杠表示根路径,   嵌套路由的完整写法    */
          component: News,
        },
        {
          path: 'message',   /*   嵌套路由的简洁写法    */
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',    /*  路由路径中携带参数， 使用占位符  */
              component: MessageDetail,
            }
          ]
        },
        {
          path: '',
          redirect: 'news',        /*   重定向    */
        },
      ]
    },
    {
      path: '/',
      redirect: '/about',        /*   重定向    */
    },
  ]
})
