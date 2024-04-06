const Router = require("koa-router");

const { auth, hadAdminPermission } = require("../middleware/auth.middleware");

const {
  upload,
  create,
  update,
  findAll,
  getUser,
} = require("../controller/my.controller");

const router = new Router({ prefix: "/My" });

// 图片上传接口
router.post("/upload", auth, hadAdminPermission, upload);

// 创建
router.post("/", auth, create);

// 修改
router.put("/:id", auth, hadAdminPermission, update);

// 获取简历信息
router.get("/", findAll);

// 获取用户权限信息
router.get("/user", auth, hadAdminPermission,getUser);
module.exports = router;
