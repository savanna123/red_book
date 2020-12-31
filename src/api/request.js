import Request from './http';
import _Vue from '../main';

const API = {
    // 获取文章列表
    // articleList: params => Request.get('/api/v1/console/article/', params),
    // // 更新文章
    // updateDrticle: params => Request.put('/api/v1/console/article/', params),
    // // 新增文章
    // addDrticle: params => Request.post('/api/v1/console/article/', params),
    // // 删除文章
    // delArticle: params => Request.del('/api/v1/console/article/', params),


    /**
     * @description 登录接口
     */
    // login: (params) => Request.post('/api/v2/auth', params),


    




    login: (params) => Request.post('/api/v2/auth', params),   //登录接口

};


export default API;
