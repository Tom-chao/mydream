import { reqShopCartList } from '@/api';
//引入创建临时身份的模块
import {userTemp} from '@/utils/temp_token'
//购物车的仓库
const state = {
      //程序运行起来的时候，仓库已经有了，用户临时身份存储到vuex
      userTempId:userTemp()
};
const mutations = {};
const actions = {
    //获取购物车数据的方法
    async getShopCart({ commit }) {
        let result = await reqShopCartList();
        console.log(result);
    }

};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}