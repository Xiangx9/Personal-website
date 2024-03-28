<template>
    <div class="center">
        <el-scrollbar>
            <el-card class="box-card at-itemhorizontal">
                <el-skeleton style="width: 100%" direction="vertical" alignment="flex-start" :loading="loading" animated
                    class="content-skeleton">
                    <template #template>
                        <div class="avatar" style="display: flex; align-items: center;">
                            <el-skeleton-item variant="circle"
                                style="margin-bottom: 12px; width: 120px; height: 120px; background-color: #aaa;" />
                            <div
                                style="display: flex; flex-direction: column; position: relative; bottom: 5px; margin-left: 15px;">
                                <el-skeleton-item variant="text" style="width: 180px; margin-bottom: 8px;" />
                                <el-skeleton-item variant="text" style="width: 50px;" />
                            </div>
                        </div>
                        <div style="padding: 12px 14px 0 0">
                            <el-skeleton :rows="3" />
                            <el-skeleton-item variant="h1" style="width: 50%;margin: 10px 0;" />
                            <el-skeleton-item variant="h1" style="width: 80%;" />
                            <el-skeleton-item variant="h1" style="width: 70%;margin: 10px 0;" />
                            <el-skeleton-item variant="h1" style="width: 80%;" />
                            <el-skeleton-item variant="h1" style="width: 90%;margin: 10px 0;" />
                            <el-skeleton-item variant="text" style="width: 100%;" />
                        </div>
                        <el-skeleton-item variant="rect" style="width: 100%; height: 300px; background-color: #aaa;" />
                    </template>
                </el-skeleton>
                <div v-if="!loading">
                    <el-link :icon="Edit" style="float: right;" @click="EditFn()"></el-link>
                    <div class="avatar" style="display: flex; align-items: center;">
                        <el-upload action :http-request="Upload" :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <el-avatar :size="100" :src="My.avatar" :style="EditInp ? '' : 'cursor: pointer'" />
                        </el-upload>
                        <div style=" display: flex; flex-direction: column; position: relative; margin-left: 15px;">
                            <div v-if="EditInp">
                                <div style="font-size: 30px;">{{ My.name }}</div>
                                <div style="height: 10px;"></div>
                                <div style="font-size:20px;">{{ My.phone }}</div>
                            </div>
                            <div v-else>
                                <el-input v-model="My.name" clearable class="demo-form" />
                                <div style="height: 10px;"></div>
                                <el-input v-model.number="My.phone" clearable class="demo-form" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>个人介绍</h1>
                        <el-input :disabled="EditInp" v-model="My.my" style="width: 100%"
                            :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="" />
                    </div>
                    <div>
                        <h1>工作经历</h1>
                        <el-input :disabled="EditInp" v-model="My.Work" style="width: 100%"
                            :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="" />
                    </div>
                    <div>
                        <h1>项目经历</h1>
                        <el-input :disabled="EditInp" v-model="My.Project" style="width: 100%"
                            :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="" />
                    </div>
                    <el-button type="primary" v-if="!EditInp" style="float: right;margin: 20px 0;"
                        @click="CreateN()">提交</el-button>
                </div>
            </el-card>
        </el-scrollbar>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { Edit, View as IconView } from '@element-plus/icons-vue'
import { MyShow } from '@/api/api'
import { ElMessage } from 'element-plus'
let { AvatarUpload, create, update, findAll } = MyShow

const loading = ref(true)

//内容
const My = ref({
    avatar: '/src/assets/images/background1.webp',
    name: 'xx',
    phone: '17343672511(同微信)',
    my: `134
            123`,
    Work: `134
            123`,
    Project: `134
            123`,
})
//编辑控制
const EditInp = ref(true)
const EditFn = () => {
    EditInp.value = !EditInp.value
}
//上传头像
const beforeAvatarUpload = (rawFile) => {
    if (EditInp.value) return false
    const isJPG = rawFile.type === "image/jpeg" || rawFile.type === "image/png";
    const isLt5M = rawFile.size / 1024 / 1024 < 2;
    if (!isJPG) {
        ElMessage.error('上传图片只能是 JPG/PNG 格式!')
        return false
    } else if (!isLt5M) {
        ElMessage.error('上传图片大小不能超过 2MB!')
        return false
    }
    return true
}
const Upload = async (rawFile) => {
    const { data: res } = await AvatarUpload(rawFile)
    console.log(res);
    My.value.avatar =`${import.meta.env.VITE_RES_URL}/${res.result.goods_img}`
}
// 提交数据
const CreateN = async () => {
    let pram = My.value
    // const { data: res } = await create(pram)
    const { data: res } = await update(1, pram)
    if (res.code==0) {
        find()
        EditInp.value = true
    }
}
//获取数据
const find = async () => {
    const { data: res } = await findAll()
    console.log(res);
    My.value = res.result.list[0]
}
find()

setTimeout(() => {
    loading.value = false
}, 2000)
</script>

<style lang="scss" scoped>
.box-card {
    margin: 20px;
    background: rgba(255, 255, 255, 0.6);
    letter-spacing: 5px;
}
</style>