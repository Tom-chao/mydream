import { reqCode, reqRegister, reqLogin } from "@/api";
//登录与注册模块仓库
const state = {
    code: '',
    token:''
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    SETTOKEN(state,token){
        state.token =token;
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
    async userRegister({ commit }, { phone, code, password }) {
        let result = await reqRegister(phone, code, password);
        if (result.code == 200) {
            return 'ok';
        } else {
            //捕获到错误信息
            return Promise.reject(result.message);
        }
    },
    //登录业务
    async userLogin({ commit }, { phone, password }) {
        //当前的这个action，向服务器发起登录请求
        let result = await reqLogin(phone, password);
        //登录成功以后，后台会给你返回一个token【令牌:很重要，后台实现是通过jwt插件完成的】字符串身份凭证
        //目前接口设计不合理:后台只是会把token返回给你，存储token，利用token【身份凭证找服务器用户新的】
        //token：令牌。后台识别用户身份凭证
        if(result.code==200){
            //如果仓库,已经存储token,用户一定是登陆了
            commit("SETTOKEN",result.data.token);
            return 'ok';
        }else{
            //登录失败
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
