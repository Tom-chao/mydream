//引入Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入的是一级路由
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
//对外默认暴露一个VueRouter的实例
//在路由配置的时候，对外暴露一个Router类的一个实例
export default new VueRouter({
     //配置路由
     routes: [
          {
               path: '/home',
               component: Home,
               //路由元信息---控制footer显示与隐藏
               meta:{show:true},
          },
          {
               path: '/search',
               component: Search,
               meta:{show:true},
          },
          {
               path: '/login',
               component: Login,
               meta:{show:false}
          }, {
               path: '/register',
               component: Register,
               meta:{show:false}
          },
          // 重定向
          {
             path:'/',
             redirect:'/home'
          }
     ]
})
