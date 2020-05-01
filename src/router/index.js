import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/views/layout/Layout');

Vue.use(VueRouter);

const routes = [
    //重定向路由必须放在第一位
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',  //*代表匹配0个或者多个路由
                component: () => import('@/views/redirect/Redirect')
            }
        ]
    },
    {
        path: '/swiper-default',
        component: () => import('@/views/swiperDemo/SwiperDefault'),
        name: 'SwiperDefault'
    },
    {
        path: '/register',
        component: () => import('@/views/register/Register'),
        name: 'Register'
    },
    {
        path: '/login',
        component: () => import('@/views/login/Login'),
        name: 'Login'
    },
    {
        path: '/goodsDetail',
        component: () => import('@/views/goods/GoodsDetail'),
        name: 'GoodsDetail'
    },
    {
        path: '/categoryList',
        component: () => import('@/views/goods/CategoryList'),
        name: 'CategoryList'
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/Home'),
                name: 'Home'
            }
        ]
    },

];

const router = new VueRouter({
    routes
});

export default router
