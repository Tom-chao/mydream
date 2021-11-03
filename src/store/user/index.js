import { reqCode, reqRegister } from "@/api";
//登录与注册模块仓库
const state = {
    code: ''
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    }
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqCode(phone);
        //前端工程师：没有能力把验证码发到用户手机上的功能
        //务必、一定是是后台人员实现的
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('faiile'));
        }
    },
    //用户注册
    async userRegister({ commit }, {phone, code, password}) {
        let result = await reqRegister(phone, code, password);
        if(result.code==200){
            return 'ok';
        }else{
            //捕获到错误信息
            return Promise.reject(result.message);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}
