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
                    <el-link :underline="false" :icon="Edit" style="float: right;" @click="EditFn()"></el-link>
                    <el-link :underline="false" style="float: left;" @click="find('admin')">
                        <el-icon class="el-icon--right"><icon-view /></el-icon>
                    </el-link>
                    <div class="avatar" style="display: flex; align-items: center;">
                        <el-upload :disabled="EditInp" action :http-request="Upload" :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <el-avatar :size="100" :src="My.avatar" />
                        </el-upload>
                        <div style=" display: flex; flex-direction: column; position: relative; margin-left: 15px;">
                            <div v-if="EditInp">
                                <div style="font-size: 30px;">{{ My.name || "姓名:" }}</div>
                                <div style="height: 10px;"></div>
                                <div style="font-size:20px;">{{ My.phone || '电话:' }}</div>
                            </div>
                            <div v-else>
                                <el-input v-model="My.name" clearable class="demo-form" placeholder="请输入姓名" />
                                <div style="height: 10px;"></div>
                                <el-input v-model.number="My.phone" clearable class="demo-form" placeholder="请输入电话" />
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
                        @click="CreateN(My)">更新数据</el-button>
                </div>
            </el-card>
        </el-scrollbar>
        <el-dialog v-model="userShow" width="500">
            <user :tableData="tableData" @handleCurrentChange="UploadUser"></user>
        </el-dialog>
    </div>
</template>


<script setup>
import { ref, onMounted ,reactive} from 'vue'
import { Edit, View as IconView } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import tokenStore from '@/store/token.js'

import { useRouter } from 'vue-router'
const router = useRouter();

import user from './user/user.vue'

import { MyShow } from '@/api/api'
let { AvatarUpload, create, update, findAll, GetUser } = MyShow

const loading = ref(true)
console.log();
//内容
const My = ref({
    avatar: '/src/assets/images/background1.webp',
    name: tokenStore().user.user_name,
    phone: '电话：',
    my: `暂无信息
                暂无信息  `,
    Work: `暂无信息
                暂无信息 `,
    Project: `暂无信息
                暂无信息 `,
})
//编辑控制
const EditInp = ref(true)
const EditFn = () => {
    find(tokenStore().user.user_name)
    if (!tokenStore().user.is_admin) {
        ElMessage.error('您不是管理员，不能进行更该')
        return false
    }
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
    try {
        const { data: res } = await AvatarUpload(rawFile)
        console.log(res);
        My.value.avatar = `${import.meta.env.VITE_RES_URL}/${res.result.goods_img}`
    } catch (error) {
        console.log('上传头像', error);
    }
}
// 提交数据
const CreateN = async (item) => {
    try {
        let pram = My.value
        const { data: res } = await update(item.id || 1, pram)
        if (res.code == 0) {
            await find()
            EditInp.value = true
        }
    } catch (error) {
        console.log('更新数据', error);
    }
}
//获取数据
const find = async (name) => {
    try {
        let pram = {
            name: name || My.value.name
        }
        const { data: res } = await findAll(pram)
        console.log(res);
        if (!res.result.dataValues.name) {
            await create(My.value)
            find()
            return false
        }
        My.value = res.result.dataValues
        if (name && tokenStore().user.user_name == 'admin' && tokenStore().user.is_admin) {
            await UploadUser()
        }
        loading.value = false
    } catch (error) {
        console.log('获取数据', error);
        if (error.code == '10102') {
            router.push({
                path: '/login',
            })
        }
    }
}

// 获取用户权限
const userShow = ref(false)
const tableData = reactive([])
const UploadUser = async (val) => {
    try {
        let pram = {
            pageNum: val || 1,
            pageSize: 5
        }
        const { data: res } = await GetUser(pram)
        tableData.value = res.result
        userShow.value = true
    } catch (error) {
        console.log('获取用户权限', error);
    }
}
onMounted(() => {
    find()
})
</script>

<style lang="scss" scoped>
.box-card {
    margin: 20px;
    background: rgba(255, 255, 255, 0.6);
    letter-spacing: 5px;
}
</style>