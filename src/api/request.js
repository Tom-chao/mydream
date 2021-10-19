//axios进行二次封装
import axios from 'axios';

//创建axios实例[创建出来的实例即为axios，只不过可以配置一些东西]
let instance = axios.create({
    //可以给请求路径中添加一些参数 
    baseURL: "",
    //设置请求时间（5S）
    timeout: 5000
});

//请求拦截器:在发请求之前可以检测到，可以干一些事情
instance.interceptors.request.use((config) => {
    //config，请求拦截器的一个配置对象
    return config;
});

//响应拦截器：服务器的数据已经返回了，可以干一些事情
instance.interceptors.response.use((res) => {
    //简化服务器返回的数据格式
    return res.data;
}, (error) => {
    //终止promise链
    return Promise.reject(error);
});


//对外暴露二次封装的axios
export default instance;