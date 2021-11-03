import { reqShopCartList,reqDeleteCartById,reqUpdateCartChecked} from '@/api';
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
    ,
    //删除某一个产品的操作
    //一定要切记:action第一个参数（minStore） 第二个参数:dispatch的载荷（传递过来的数据）
    async deleteCart({commit},skuId){
      //删除某一个产品的接口：服务器会通知删除成功与失败
       let result  = await reqDeleteCartById(skuId);
       //删除购物车函数:也需要返回成功与失败标记，因为组件哪里，需要知道删除成功、失败
       if(result.code==200){
           return 'ok';
       }else{
           return Promise.reject(new Error('faile'));
       }

    }
    ,
    //修改某一个产品的选中为选中状态
    async updateChecked({commit},{skuId,isChecked}){
       let result  = await reqUpdateCartChecked(skuId,isChecked);
       //修改成功
       if(result.code==200){
           return 'ok';
       }else{
           return Promise.reject(new Error('faile'));
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