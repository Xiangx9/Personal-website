<template>
    <div class="center Login" style=" background: url('')">
        <div class="LoginBox center">
            <el-input v-model="userFrom.user_name" style="width: 300px;height: 50px;" placeholder="请输入账号" clearable />
            <el-input v-model="userFrom.password" style="width: 300px;height: 50px;margin: 20px 0;" placeholder="请输入密码"
                clearable show-password />
            <div id="draw-border">
                <button style="width: 300px;height: 50px;" @click="login()">{{ loginText }}</button>
            </div>
            <!-- <el-button type="primary" style="width: 300px;height: 50px;" @click="login()">{{ loginText }}</el-button> -->
            <div class="loginText">
                <div @click="loginText = '登录'">登录</div>
                <div @click="loginText = '注册'">没有账号，去注册</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Logins } from '@/api/api'
import tokenStore from '@/store/token.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter();



const loginText = ref('登录')
const userFrom = ref({})
const login = async () => {
    const pram = {}
    Object.assign(pram, userFrom.value)
    if (loginText.value == '登录') {
        const { data: res } = await Logins.login(pram)
        tokenStore().token = res.result.token
        router.replace({
            path: '/',
            params: { id: 1 }
        })
    } else if (loginText.value == '注册') {
        const { data: res } = await Logins.register(pram)
        console.log(res);
        loginText.value = '登录'
        ElMessage({
            message: res.message,
            type: 'success',
        })
    }
}
onMounted(() => {

})
</script>

<style scope></style>