//仓库--vuex
import Vue from 'vue';
import Vuex from 'vuex';
//使用插件
Vue.use(Vuex);
//四大核心属性
//state：仓库数据的来源
const state = {
    count:1
};
//mutations:唯一可以改变state数据地方
const mutations = {
   ADD(state){
      state.count++;
   },
   ADDS(state,value){
     state.count +=value;
   }
};
//actions:可以处理dispatch派发action地方，这里可以书写你的业务逻辑：for、if、异步语句等等
const actions = {
    //这里不能书写修改state语句
    add({commit}){
      commit("ADD");
    },
    adds({commit},value){
        commit("ADDS",value);
    }
};
//getters：计算属性
const getters = {};
//对外暴露Store类的一个实例
export default new Vuex.Store({
   state,
   mutations,
   actions,
   getters
});
