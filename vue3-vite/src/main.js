import './style.css'
import './styles/index.scss'
import './styles/Animation.css' // 引入动画
import './styles/fonts/font.css' // 引入字体
import "../public/iocnfont/iconfont.css"; // 引入图标

import { createApp } from 'vue'
import router from './router'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "amfe-flexible/index.js"
pinia.use(piniaPluginPersistedstate);
// 创建app
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 注入
app.use(pinia)
app.use(router)
app.use(ElementPlus)
// 挂载实例
app.mount('#app')
