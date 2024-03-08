<template>
    <div class="center">
        <el-scrollbar>
            <el-card class="box-card at-itemshake" v-for="(item, index) in list" :key="index">
                <h1 class="title">{{ item.title }}</h1>
                <div class="text" v-for="i in item.Url" :key="i">
                    <h2>{{ i.name }}:&nbsp;
                        <el-link type="primary" :href="i.url" target="_blank">{{ i.url }}</el-link>
                    </h2>
                </div>
            </el-card>
        </el-scrollbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([{
    title: '学习网站',
    Url: [{
        name: '书栈网',
        url: 'https://www.bookstack.cn/'
    },
    {
        name: 'vue3文档',
        url: 'https://vue3js.cn/'
    },
    {
        name: 'node中文网',
        url: 'https://nodejs.cn/'
    },]
}, {
    title: '常用工具',
    Url: [
        {
            name: 'lodash库',
            url: 'https://www.lodashjs.com/'
        },
        {
            name: 'vueuse',
            url: ' https://www.vueusejs.com/'
        }, {
            name: '动画',
            url: 'https://www.isqqw.com/'
        },
        {
            name: '在线工具',
            url: 'https://www.lddgo.net/'
        },
        {
            name: '科学上网',
            url: 'https://angrytools.com/css/animation/'
        },
        {
            name: '技术查询工具',
            url: 'https://quickref.cn/'
        },
        {
            name: 'flex在线布局',
            url: 'https://cssflex-generator.netlify.app/'
        },]
}, {
    title: '其他类型',
    Url: [{
        name: '主机',
        url: 'http://xxshow.phpnet.us'
    }, {
        name: 'cloudflare',
        url: 'https://dash.cloudflare.com/'
    },
    {
        name: '服务器',
        url: 'https://aqinco.com/login/'
    },
    ]
}])

</script>

<style scoped lang="scss">
.title {
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 10px;
}

.text {
    font-size: 14px;
    margin: 20px 0;
    letter-spacing: 2px;
}

.box-card {
    margin: 20px;
    background: rgba(255, 255, 255, 0.6);
}
</style>