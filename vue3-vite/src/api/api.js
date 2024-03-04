import { request } from './axios'
export class Logins {       // 登录模块
    static async register(params) {  //注册
        return request('/api/users/register',params, 'post')
    }
    static async login(params) {  //登录
        return request('/api/users/login',params, 'post')
    }
    static async ModifyPassword(params) {  //修改密码
        return request('/api/users/',params, 'put')
    }
}

export class landRelevant {     // 模块二
    static async landList(params) {
        return request('',params, 'get')
    }
}