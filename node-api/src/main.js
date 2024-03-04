const { APP_PORT } = require('./config/config.default') //导入端口号

// 创建一个Koa对象表示web app本身:
const app = require('./app')

// 在端口APP_PORT监听:
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})
