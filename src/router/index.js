//引入Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);

//备份VueRouter.prototype原有的push|replace方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype的push方法
VueRouter.prototype.push = function (location, resolve, reject) {
     //函数对象的apply与call的区别?
     //相同点:都可以改变函数的上下文一次，而且函数会立即执行一次
     //不同：函数执行的时候，传递参数不同，apply需要的是数组，call传递参数的时候用逗号隔开
     //原始的push方法可以进行路由跳转，但是需要保证上下文this是VueRouter类的实例
     //第一种情况：外部在使用push的时候传递成功与失败的回调
     if (resolve && reject) {
          originPush.call(this, location, resolve, reject);
     } else {
     //第二种情况：外部在使用push方法的时候没有传递成功与失败的回调函数
          originPush.call(this, location, () => { }, () => { });
     }
}
//重写VueRouter.prototype.replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
 (resolve && reject) ? originReplace.call(this,location,resolve,reject):originReplace.call(this,location,()=>{},()=>{});
}



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
               meta: { show: true },
          },
          {
               //代表params参数可有可无，务必要加上?
               path: '/search/:keyword?',
               component: Search,
               meta: { show: true },
               //命名路由
               name: 'search',
               //路由也可以传递props数据，拥有三种写法
               //如果 props 被设置为 true，params参数将会被设置为组件属性
               // props:true,
               // props:{a:1,b:2}
               props: (route) => ({ keyWord: route.params.keyWord, k: route.query.k })

          },
          {
               path: '/login',
               component: Login,
               meta: { show: false }
          }, {
               path: '/register',
               component: Register,
               meta: { show: false }
          },
          // 重定向
          {
               path: '/',
               redirect: '/home'
          }
     ]
})
