<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>
<script>
//引入子组件
//发现三级联动在search模块中也使用，咱们将三级联动的组件注册为全局组件
//下面引入的是局部组件：定义、引入、注册、使用
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  //组件挂载完毕:页面加载完毕，一般在这里发请求
  mounted(){
   //派发action,获取三级联动的数据
  //  this.$store.dispatch('getCategory');
  }
};
</script>

<style scoped>
</style>
