import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
//创建Vue类的一个实例
new Vue({
  render: h => h(App),
  //注册路由,给组件的身上添加了$router与$route两个属性
  router
}).$mount('#app')
