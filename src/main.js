import Vue from 'vue'
import App from './App.vue'


let a = 100;
//创建Vue类的一个实例
new Vue({
  render: h => h(App),
}).$mount('#app')
