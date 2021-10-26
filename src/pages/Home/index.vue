<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!--Home父组件：通过v-for遍历生成多个Floor组件-->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floorInfo="floor"></Floor>
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
//引入辅助函数
import {mapState} from 'vuex';
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
  //Home组件的组件挂载完毕，生命周期函数，通过Vuex发请求，获取Floor组件数据
  mounted(){
    this.$store.dispatch('getFloorList');
  },
  //计算属性
  computed:{
    ...mapState({
       floorList:state=>state.home.floorList
    })
  }
};
</script>

<style scoped>
</style>
