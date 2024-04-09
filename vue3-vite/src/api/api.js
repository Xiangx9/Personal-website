import { request } from './axios'
export class Logins {       // 登录模块
    static async register(params) {  //注册
        return request('/api/users/register',params, 'post')
    }
    static async login(params) {  //登录
        return request('/api/users/login',params, 'post')
    }
    static async changePassword(params) {  //修改密码
        return request('/api/users/',params, 'patch')
    }
}

export class MyShow {     // 个人介绍模块
    static async AvatarUpload (params) {  //头像上传
        return request('/api/goods/upload',params, 'post')
    }
    static async create (params) {  //创建内容
        return request(`/api/My/`, params,'post')
    }
    static async update (id,params) {  //修改内容
        return request(`/api/My/${id}`, params,'put')
    }
    static async findAll (params) {  //获取内容
        return request('/api/My/',params, 'get')
    }
    static async GetUser (params) {  //获取用户信息
        return request('/api/My/user',params, 'get')
    }
    static async updateUser (id,params) {  //修改用户权限
        return request(`/api/My/user/${id}`, params,'put')
    }
}