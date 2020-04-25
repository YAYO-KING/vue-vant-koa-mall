import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/views/layout/Layout');

Vue.use(VueRouter);

const routes = [
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

];

const router = new VueRouter({
    routes
});

export default router
