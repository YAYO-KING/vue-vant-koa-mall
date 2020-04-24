#Vue2.x+vantUI+Koa2+mongoDB实战移动电商

#前端部分
#安装vant
npm i vant -S

#安装babel-plugin-import，实现组件的按需引入，用以提高性能
npm i babel-plugin-import -D
然后在babel.config.js文件中配置vant组件的按需引入

#安装axios 一定要装18版本的，不然option中无法添加自定义属性，比如loading
npm i axios@0.18.0 -S
配置http.js接口工具类

#安装vue-awesome-swiper 3.1.3版本
npm i vue-awesome-swiper@3.1.3  -S
Swiper常用于移动端网站的内容触摸滑动,Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，以及PC端网站。Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。


#后端部分
#安装koa2，后台服务框架
npm i koa -S

#安装mongoose，实现和mongodb数据库的数据操作
npm i mongoose -S

#安装glob
npm i glob -S
node的glob模块，允许使用*等符号，来写一个glob规则，像在shell中一样，获取匹配对应的规则文件

#安装bcrypt
npm i bcrypt -S
bcrypt进行密码加密使用

#安装koa-router
npm i koa-router -S
实现koa的路由接口api

#安装koa-bodyparser
npm i koa-bodyparser -S
解析post请求中的body的参数

#安装koa2-cors
npm i koa2-cors -S
解决koa2的跨域访问的问题






