//引入的是一级路由
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess';
export default [
    {
        path: '/home',
        component: Home,
        //路由元信息---控制footer显示与隐藏
        meta: { show: true },
    },
    {
        //代表params参数可有可无，务必要加上?
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        //命名路由
        name: 'search',
        //路由也可以传递props数据，拥有三种写法
        //如果 props 被设置为 true，params参数将会被设置为组件属性
        // props:true,
        // props:{a:1,b:2}
        props: (route) => ({ keyWord: route.params.keyWord, k: route.query.k })

    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    }, {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: { show: true },
    },
    {
       path:'/addcartsuccess',
       component:AddCartSuccess,
       meta:{show:true},
       name:"addcartsuccess"
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true}
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true}
    }
    ,
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show:true}
    }
]