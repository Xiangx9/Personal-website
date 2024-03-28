const Router =require('koa-router')


const { auth, hadAdminPermission } = require('../middleware/auth.middleware')

const {
    upload,
    create,
    update,
    findAll
  } = require('../controller/my.controller')

const router = new Router({ prefix: '/My' })


// 图片上传接口
router.post('/upload', auth, hadAdminPermission, upload)

// 创建
router.post('/', auth, hadAdminPermission, create)

// 修改
router.put('/:id', auth, hadAdminPermission, update)

// 获取
router.get('/', findAll)

module.exports = router