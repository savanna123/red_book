import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n


import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import API from './api/request';
import '@/icons' // icon

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

const bindHttp = () => {
  Object.entries(API).forEach(([api, request]) => {
    Vue.prototype[`$${api}`] = request;
  });
}
Vue.use(bindHttp);

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false



// //路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == "/login") { // 如果不需要权限校验，直接进入路由界面
    next();
  } else if (window.sessionStorage.getItem("userToken")) {
    // 判断该路由是否需要登录权限
    // 获取当前的token是否存在
    // console.log("token存在");
    next();
  } else { // 如果不需要权限校验，直接进入路由界面
    next({
      path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

