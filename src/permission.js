import {getToken} from "./common/js/auth";
import store from "./store";
import router from "./router";

/**
 * Created by yanyue on 2020/3/25 21:07
 * permission中定义了全局的路由守卫
 */

//白名单
const whiteList = ["/login", "/register"];

// 路由守卫,进行拦截，可以拦截用户设置的权限是路由requireAuth:true的（但是可能token失效了，但是本地还是保存着，所以需要axios拦截配合）
router.beforeEach(async (to, from, next) => {
    //判断localStorage中是否有token来判断是否登录
    const hasToken = getToken();
    if (hasToken) {
        //如果token存在
        if (to.path === '/login') {
            //跳转到login页面的话，直接跳转到/主页去，然后重新执行了一次beforeEach
            next({path: '/'});
        } else {
            //根据store中的userInfo是否存在，来判断页面是否刷新了
            const username = store.state.user.userInfo.username;
            if (username) {
                next();
            } else {
                try {
                    //如果userInfo不存在的时候，就去调用接口获取用户的userInfo
                    const userInfo = await store.dispatch("user/getUserInfo");
                    next({...to, replace: true})
                } catch (e) {
                    //发生异常的话
                    store.dispatch("user/clearCurrentState");
                    // 用户没有登录
                    next(`/login?redirect=${to.path}`);
                }
            }
        }


    } else {
        //没有token,然后判断是否在白名单中
        if (whiteList.indexOf(to.path) !== -1) {
            //在白名单可以访问
            next();
        } else {
            //不在白名单中就跳转到login,并且清除用户信息
            store.dispatch("user/clearCurrentState");
            // 用户没有登录
            next(`/login?redirect=${to.path}`);
        }
    }
});

router.afterEach((to, from, next) => {
    //window.scrollTo(0, 0);
});
