import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局引入：导入vant的ui组件库--全局引入（缺点引入的包很大，导致打开程序很慢，尤其是手机端网速不行的时候）
//import Vant from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Vant);

//按需引入：打包少，程序运行速度会变快
//使用babel-plugin-import实现按需引入，配置babel.config.js文件
import {Button} from "vant";
Vue.use(Button);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
