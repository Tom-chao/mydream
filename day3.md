1:重写push与replace方法
工作的时候想处理掉，不想处理对于你的程序没有任何影响
function push(){
    return new Promise(resolve,reject){

    }
}


2:axios二次封装
-----API：关于请求相关的（axios）
请求、响应拦截器----nprogress进度条


3:vuex
当项目比较大，组件通信数据比较复杂，这种情况在使用vuex

Vuex是插件，通过vuex仓库进行存储项目的数据



1)vuex模块式开发【modules】
由于项目体积比较大，你向服务器发请求的接口过多，服务器返回的数据也会很多，如果还用以前的方式存储数据，导致vuex中的state数据格式比较复杂。采用vuex模块式管理数据。
Vuex核心概念:state、actions、mutations、getters、modules

{
    state：{
         a:1,
         b:2,
         c:[],
         d:{}
    }
}

//模块式开发
{
    state:{
        home:{a:1},
        search:{},
        detail:{}
    }
}


2)商品分类三级联动展示动态数据

以前基础课程的时候，发请求操作如下：在组件的mounted中书写axios.get||post,获取到数据存储到组件的data当中进行使用


你们写项目的时候发请求在哪里发呀？
mounted|created:都可以

mounted：模板已经变为真是DOM【只不过没有数据，显示空白】，因为ajax是异步，需要时间的。
created：稍微好那么一丢丢（不算啥）




3)商品分类数据猜想？

[
    {
        id:1,categoryName:'图书',
        child:[
             {id:3.14,
              categoryName:'影像'，
              child:[
                   {id:4,categoryName:'华为'}
              ]
             }
        ]
    }
]


4)完成动态展示商品分类的数据






5)完成一级分类的背景效果

第一种解决方案：CSS  hover 怎么接单怎么来

































