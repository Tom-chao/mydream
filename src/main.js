import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
import store from '@/store';
//创建Vue类的一个实例
new Vue({
  render: h => h(App),
  //注册路由,给组件的身上添加了$router与$route两个属性
  router,
  //注册仓库，给每一个组件的身上添加$store属性
  store
}).$mount('#app')
