import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
import store from '@/store';

//注册全局组件---三级联动
import TypeNav from '@/components/TypeNav';
//全局组件注册方式:
//第一参数:组件名字  第二个参数：哪一个组件
//elementUI注册组件其中有一种写法，就是这种写法
Vue.component(TypeNav.name,TypeNav);
//创建Vue类的一个实例
new Vue({
  render: h => h(App),
  //注册路由,给组件的身上添加了$router与$route两个属性
  router,
  //注册仓库，给每一个组件的身上添加$store属性
  store
}).$mount('#app')
