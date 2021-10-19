//引入Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

//push|replace方法----VueRouter.prototye原型对象提供的

// //备份一下：原型对象最开始的push方法----【路由跳转的能力】，在人家的基础之上进行二次开发
let originPush = VueRouter.prototype.push;
//重写push方法
VueRouter.prototype.push = function(location){
   //利用人家原型对象提供的push方法进行路由的跳转
   //只不过人家push方法上下文务必是VueRouter类的一个实例，因此使用call
   //this：即为最后调用的对象VueRouter类的实例  
   originPush.call(this,location);
}





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
               //代表params参数可有可无，务必要加上?
               path: '/search/:keyWord?',
               component: Search,
               meta:{show:true},
               //命名路由
               name:'search',
               //路由也可以传递props数据，拥有三种写法
               //如果 props 被设置为 true，params参数将会被设置为组件属性
               // props:true,
               // props:{a:1,b:2}
               props:(route)=>({keyWord:route.params.keyWord,k:route.query.k})
               
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
