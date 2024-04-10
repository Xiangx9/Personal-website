<template>
    <div class="center">
        <el-scrollbar>
            <el-card class="box-card at-itemshake" v-for="(item, index) in list" :key="index">
                <h2>{{ item.title }}</h2>
                <el-divider border-style="inset" />
                <h3>项目背景:</h3>
                <span v-html="item.text"></span>
                <div>
                    <img v-for="i in item.img" :src="i.a" alt="" style="width: 100%; height: auto;margin: 10px 0;">
                </div>
            </el-card>
        </el-scrollbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([{
    title: '氧康智能云平台系统',
    text: ` 1.这是一个后台管理系统用于控制硬件设备（氧舱设备），主要有数据中心模块，氧舱管理模块，订单统计模块，场地管理模块，会员管理模块，营销活动等模块
            <br>
            2.该系统分为BC两端，C端为微信小程序，三个使用角色（平台管理员，场地管理员，用户）
            <br>
           3.大概功能流程为，用户通过小程序扫码，选择套餐，选择优惠劵，下单启动氧舱，后台生成相应的数据
            `,
    img:[{
        a:'/images/image1.png',
    },{
        a:'/images/image2.png',
    },{
        a:'/images/image3.png',
    }]
}, {
    title: '氧康智能小程序',
    text: ` 1.这是一个用于设备下单启动的小程序，主要有用户登录，扫码下单，订单查询，卡券领取等功能
            <br>
            2.大概流程为用户打开微信扫码，登录，下单启动（如果已经登录可直接选择套餐下单启动）
            `
},
])

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