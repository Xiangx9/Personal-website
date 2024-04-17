<template>
    <div class="center">
        <div class="name  at-item">Welcome to<span>Xin's world</span> </div>
        <el-scrollbar>
            <div  class="home">
                <div  class="scrollbar-demo-item">
                    <Yiyan :title="title" @handleAdd="handleAdd"></Yiyan>
                </div>
                <div class="scrollbar-demo-item">
                    <Time></Time>
                </div>
                <div class="scrollbar-demo-item ">
                    <router-link to="/PersonalIntroduce">
                        <div class="title">Personal introduce</div>
                        <div class="iconfont icon-geren1"></div>
                    </router-link>
                </div>
                <div class="scrollbar-demo-item ">
                    <router-link to="/StudyNotes">
                        <div class="title">Study notes</div>
                        <div class="iconfont icon-shuben"></div>
                    </router-link>
                </div>
                <div class="scrollbar-demo-item ">
                    <router-link to="/WorksProject" class="title">
                        <div class="title"> Works Project</div>
                        <div class="iconfont icon-xiangmu_xiangmuguanli"></div>
                    </router-link>
                </div>
                <div class="scrollbar-demo-item ">
                    <router-link to="/ArrayObject" class="title">
                        <div class="title"> Array Object</div>
                        <div class="iconfont icon-pingdingfangfa"></div>
                    </router-link>
                </div>
                <div class="scrollbar-demo-item ">
                    <router-link to="/Three" class="title">
                        <div class="title"> Three.js</div>
                        <div class="iconfont icon-a-car6-1"></div>
                    </router-link>
                </div>
                <div @click="router.push({ path: '/AI' })" class="scrollbar-demo-item bgimg"> </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tokenStore from '../../store/token'
import Yiyan from '@/components/yiyan/index.vue'; // 引入 一言
import Time from '@/components/time/index.vue'; // 引入 时间 天气
const router = useRouter()

// 接收参数
// const router = useRoute()
// console.log('id：'+router.query.id)


//子传父
const title =ref('yi')
// 定义事件函数
const handleAdd = (item) => {
    console.log(item);
}


onMounted(() => {
    if (!tokenStore().token) {
        router.replace({
            path: '/login'
        })
    }

})
</script>

<style scope lang="scss">
.bgimg {
    width: 98% !important;
    height: 500px !important;
    background: url('https://imgsa.baidu.com/forum/pic/item/7cff162662d0f703a813dcfc06fa513d2797c55f.jpg') !important;
    background-size: 100% 100% !important;

    @media screen and (max-width:600px) {
        height: 200px !important;

    }
}
</style>