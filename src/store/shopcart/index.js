import { reqShopCartList } from '@/api';
//引入创建临时身份的模块
import { userTemp } from '@/utils/temp_token'
//购物车的仓库
const state = {
    //程序运行起来的时候，仓库已经有了，用户临时身份存储到vuex
    userTempId: userTemp(),
    //当前临时用户的购物车的数据
    shopList:[]
};
const mutations = {
    GETSHOPCART(state, shopList) {
        state.shopList = shopList;
    }
};
const actions = {
    //获取购物车数据的方法
    async getShopCart({ commit }) {
        let result = await reqShopCartList();
        //如果成功
        if (result.code == 200) {
            commit('GETSHOPCART', result.data);
        }
    }

};
const getters = {
    //简化购物车的数据
    //当前购物车模块的state，并非大仓库的state数据【只是包含购物车state数据】
    shopCartData(state){
      return state.shopList[0]||{}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}