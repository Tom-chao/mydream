import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
import store from '@/store';

//这里是入口文件，也是程序最先执行的地方，在TypeNav组件使用之前，向服务器发起一次请求，获取三级联动的数据
//存储于vuex，当然当TypeNav在使用仓库中的数据的时候（数据早已经有了），TypeNav可以获取数据【展示数据】
//当然书写这里请求只会发一次，当然可以进行性能优化
//store.dispatch('getCategory')



//注册全局组件---三级联动
import TypeNav from '@/components/TypeNav';
//全局组件注册方式:
//第一参数:组件名字  第二个参数：哪一个组件
//elementUI注册组件其中有一种写法，就是这种写法
Vue.component(TypeNav.name,TypeNav);
//引入先关的mock数据的文件【需要代码执行一次】
import "@/mock/serve";
//测试mock数据能否获取到[不能的]
import {reqGetBannerList} from '@/api';
let result = reqGetBannerList();
console.log(result);

//创建Vue类的一个实例
new Vue({
  render: h => h(App),
  //注册路由,给组件的身上添加了$router与$route两个属性
  router,
  //注册仓库，给每一个组件的身上添加$store属性
  store
}).$mount('#app')
