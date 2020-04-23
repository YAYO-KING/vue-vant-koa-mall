import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入rem.js，实现手机端的适配方案
//设计的是屏幕全局是7.5rem，针对的是750px宽度的设计稿，100px就是1rem
//实际的web浏览器上查看就是1rem=50px
import "@/common/js/rem.js"

//浏览器样式格式化（手机端）
import "@/common/css/reset.css"

//导入图标
import "@/common/css/iconfont/iconfont.css";

//全局引入：导入vant的ui组件库--全局引入（缺点引入的包很大，导致打开程序很慢，尤其是手机端网速不行的时候）
//import Vant from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Vant);

//按需引入：打包少，程序运行速度会变快
//使用babel-plugin-import实现按需引入，配置babel.config.js文件
import {Button, Row, Col, Swipe, SwipeItem, Lazyload} from "vant";
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload);

//导入api接口
import api from './api/index';
Vue.prototype.$api = api;

//引入vue-awesome-swiper的使用,全局使用（如果只是某个页面使用的话，就在那个页面引入就可以了）
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
//Vue.use(VueAwesomeSwiper);

//引入全局过滤器
import * as filters from './common/js/filter.js'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
