//统一管理项目全部接口的文件
//获取真实服务器的接口的数据利用当前axios
import request from './request';
//如果获取mock接口的数据，利用底下axios
import mockRequest from './mockRequest';
//商品分类的数据接口
export const reqCategoryList = ()=>request({url:'/product/getBaseCategoryList',method:'get'});
//获取banner数据的接口函数
export const reqGetBannerList = ()=>mockRequest({url:'/banner',method:'get'});
//获取Floor(楼层)数据接口的函数
export const reqGetFloorList = ()=>mockRequest({url:`/floor`,method:'get'});

//搜索产品的接口[真实的接口]
//URL:/api/list   method:post    参数：需要携带
//这个接口【携带参数：最多十个，十个属性可以传递，也可以不传递，但是至少给给服务器携带一个空对象】
export const reqSearchList = (data)=>request({url:"/list",method:'post',data})

