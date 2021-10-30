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
VueRouter.prototype.replace = function (location, resolve, reject) {
     (resolve && reject) ? originReplace.call(this, location, resolve, reject) : originReplace.call(this, location, () => { }, () => { });
}
import routes from './routes'
//对外默认暴露一个VueRouter的实例
//在路由配置的时候，对外暴露一个Router类的一个实例
export default new VueRouter({
     //配置路由
     routes,
     //滚动行为的设置
     scrollBehavior(to, from, savedPosition) {
          //设置Y轴的起点【y属性值没有负数】
          //当然滚动行为也可以设置x轴的
          return {y:0}
     }

})
