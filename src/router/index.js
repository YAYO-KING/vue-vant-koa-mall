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
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/swiper-default',
                component: () => import('@/views/swiperDemo/SwiperDefault'),
                name: 'SwiperDefault'
            }
        ]
    },
];

const router = new VueRouter({
    routes
});

export default router
