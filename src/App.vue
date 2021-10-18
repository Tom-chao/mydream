<template>
  <div>
     <Header></Header>
     <!-- 路由组件出口的地方:展示的地方 -->
     <router-view></router-view>
     <!-- 显示:首页、搜索显示  隐藏：登录、注册 -->
     <!--v-show="$route.path=='/home'||$route.path=='/search'"-->
     <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入非路由组件
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: '',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
