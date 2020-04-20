/**
 * Created by yanyue on 2019-09-18 14:51
 */

//import homeApi from './interfaces/homeApi';
//import userApi from './interfaces/userApi';

//批量引入interfaces下的接口文件导入模块（读取文件的路径，是否遍历文件的子目录，匹配文件的正则）
let requireAll = require.context('./interfaces', false, /\.js$/);
//requireAll.keys()为文件名数组; requireAll(apiName)获取文件暴露的内容
const apiArr = requireAll.keys().map(apiName=> requireAll(apiName).default || requireAll(apiName));
//组合接口
const api = apiArr.reduce((prev,curr)=> Object.assign(prev,curr), {});

//const api = {
//    ...userApi,
//    ...homeApi
//};

export default api;
