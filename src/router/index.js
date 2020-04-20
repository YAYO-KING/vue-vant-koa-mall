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
];

const router = new VueRouter({
    routes
});

export default router
