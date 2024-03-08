import {
  createWebHashHistory,
  createWebHistory,
  createRouter,
} from "vue-router"; //导入路由系列：

const routes = [
  {
    // 页面逻辑
    path: "/", //路由分配的 URL
    name: "home", //当路由指向此页面时显示的名字
    component: () => import("@/views/home/index.vue"), //路由调用这个页面时加载的组件名
  },
  {
    //登录
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    //个人介绍
    path: "/PersonalIntroduce",
    name: "PersonalIntroduce",
    component: () => import("@/views/PersonalIntroduce/index.vue"),
  },
  {
    //学习笔记
    path: "/StudyNotes",
    name: "StudyNotes",
    component: () => import("@/views/StudyNotes/index.vue"),
  },
  {
    //工作项目
    path: "/WorksProject",
    name: "WorksProject",
    component: () => import("@/views/WorksProject/index.vue"),
  },
  {
    //数组方法
    path: "/ArrayObject",
    name: "ArrayObject",
    component: () => import("@/views/ArrayObject/index.vue"),
  },
];

//创建路由
const router = createRouter({
  // history: createWebHashHistory(), //hash模式
  history: createWebHistory(), //History模式
  routes, //路由路径
  scrollBehavior(to, from, savedPosition) {
    //滚动行为
    // 滚动到锚点
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //     behavior: "smooth",
    //   };
    // }
  },
});

//全局前置守卫
// router.beforeEach(async (to, from,next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   // 如果用户未能验证身份，则 `next` 会被调用两次
//   else  next()
// })

// 全局后置钩子
router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transition = toDepth < fromDepth ? "slide-right" : "slide-left";
});

export default router;