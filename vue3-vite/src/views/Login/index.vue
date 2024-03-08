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

<style scope>
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: 1px solid #409eff;
  background: none;
  text-transform: uppercase;
  color: #386a9c;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
  letter-spacing: 10px;
  font-size: 16px;
  font-weight: 900;
}

button::before,
button::after {
  box-sizing: inherit;
  position: absolute;
  content: "";
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before,
button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #409eff;
  border-right-color: #409eff;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #409eff;
  border-left-color: #409eff;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
    height 0.3s ease-out 1s;
}
</style>