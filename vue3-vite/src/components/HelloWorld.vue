<template>
  123
  {{ counter.count }}
  {{ counter.doubleCount }}
</template>
<script setup>
import { onMounted } from 'vue'
import { Logins } from '../api/api'
import tokenStore from '@/store/token.js'
import useCounterStore from '@/store/counter.js'
const counter = useCounterStore()
//登录
const GoLogin =async () => {
  const pram = {
    user_name: "2",
    password: '123123'
  }
  const { data: res } =await Logins.register(pram)
console.log(res);
}
onMounted(() => {
  GoLogin()
})
</script>
<style scoped></style>
