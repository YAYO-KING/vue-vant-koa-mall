import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import createLogger from 'vuex/dist/logger';

//导入模块
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules
}, {});

//实现vuex的数据持久化  默认是放置在localStorage中的
//import createPersistedState from 'vuex-persistedstate';
//如果想放置搭配sessionStorage中，如下配置
/*
const createPersistedState =
    createPersistedState({
    storage: window.sessionStorage
});
*/

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  getters,
  modules,
  strict: false, //是否可以不通过mutations去修改state数据 //strict
  //plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()],
  plugins: debug ? [createLogger()] : [],
})
