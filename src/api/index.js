//统一管理项目全部接口的文件
//商品分类的数据接口
///api/product/getBaseCategoryList   get   无
import request from './request';
//axios发请求形式:axios.get()  axios();
export const reqCategoryList = ()=>{
  //将服务器返回的数据（promise对象）让函数返回，可以让组件获取到
  //没有return返回结果即为undefined    
 return request({url:'/api/product/getBaseCategoryList',method:'get'});
}

