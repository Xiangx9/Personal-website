<template>
  123
</template>
<script setup>
import { onMounted } from 'vue'
import { Logins } from '../api/api'
import tokenStore from '@/store/token.js'

//登录
const GoLogin =async () => {
  const pram = {
    user_name: "2",
    password: '123456'
  }
  const { data: res } =await Logins.register(pram)
console.log(res);
}
onMounted(() => {
  GoLogin()
})
</script>
<style scoped></style>
