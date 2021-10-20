//home模块的小仓库
import { reqCategoryList } from '@/api';
//四大核心属性
//state：仓库数据的来源
const state = {
    //商品分类的数据,这里初始化数据不能瞎写。看请求返回的结果
    categoryList: []
};
//mutations:唯一可以改变state数据地方
const mutations = {
    GETCATEGORY(state, category) {
       //修改state
       state.categoryList = category;
    }
};
//actions:可以处理dispatch派发action地方，这里可以书写你的业务逻辑：for、if、异步语句等等
const actions = {
    //获取商品分类的数据
    async getCategory({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            //提交mutation
            commit("GETCATEGORY", result.data);
        }
    }
};
//getters：计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}