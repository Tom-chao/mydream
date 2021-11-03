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
export const reqSearchList = (data)=>request({url:"/list",method:'post',data});
//获取产品详情的接口
///api/item/{skuId}  get
export const reqDetailList = (skuId)=>request({url:`/item/${skuId}`,method:'get'});
//添加到购物车(对已有 物品进行数量 改动)
///api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

//获取购物车的数据
///api/cart/cartList   get 
export const reqShopCartList = ()=>request({url:'/cart/cartList',method:'get'});

//删除购物车某一个产品的接口
///api/cart/deleteCart/{skuId}  delete 
export const reqDeleteCartById = (skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:'delete'});


//修改某一个产品的选中状态接口
//api/cart/checkCart/{skuId}/{isChecked}  get 
//需要注意：从文档拷贝过来路径skuId小写的
export const reqUpdateCartChecked = (skuId,isChecked)=>request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});


//用户获取到验证码的接口
///api/user/passport/sendCode/{phone}  get 
export const reqCode = (phone)=>request({url:`/user/passport/sendCode/${phone}`,method:'get'});

//注册用户接口
//api/user/passport/register  post  phone code password
export const reqRegister = (phone,code,password)=>request({url:`/user/passport/register`,method:'post',data:{phone,code,password}});


