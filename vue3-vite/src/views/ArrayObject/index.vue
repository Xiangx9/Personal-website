<template>
    <div class="center">
        <el-scrollbar>
            <el-card class="box-card at-itemleft">
                <template #header>
                    <div class="card-header">
                        <el-link href="https://www.yuque.com/xiangxin1999/qe1g7s/wng7lh3k3c4d6s6y"
                            type="primary">语雀</el-link>
                    </div>
                </template>
                <img v-for="item in list" :src="item.img" alt="" style="width: 100%; height: auto;margin: 10px 0;">
            </el-card>
        </el-scrollbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([{
    img: '/src/assets/images/Number.png',
}, {
    img: '/src/assets/images/str.png',
},])
</script>

<style lang="scss" scoped>
.box {
    width: 80%;
    height: 800px !important;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;

    .box-card {
        width: 100%;
        margin: 20px;
        background: rgba(255, 255, 255, 0.6);

        .code {
            background: #000;
            color: #fff;
            letter-spacing: 2px;
            padding: 10px;
            margin-top: 10px;
        }
    }

    h1 {
        font-size: 2vw !important;
        -webkit-text-stroke: 2px #2c3e50;
    }

    h2 {
        font-size: 1vw !important;
    }

    h3 {
        font-size: 0.9vw !important;
    }

    @media screen and (max-width:600px) {
        flex-wrap: wrap;

        h1 {
            font-size: 30px !important;
        }

        h2 {
            font-size: 1.2vh !important;
        }

        h3 {
            font-size: 1vh !important;
        }

        .box-card .el-scrollbar {
            height: 200px !important;
        }
    }
}
</style>