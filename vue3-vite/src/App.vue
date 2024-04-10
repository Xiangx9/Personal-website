<template>
  <!-- <div @click="toggleDark()" class="Dark">
    <el-icon size="30">
      <TurnOff v-if="isDark" />
      <Open v-else />
    </el-icon>
  </div> -->
<div class="bgc">
  <keep-alive>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </keep-alive>
</div>
</template>

<script setup>
import { useIntervalFn } from '@vueuse/core'
import { onMounted, ref } from 'vue'
// import { useDark, useToggle } from '@vueuse/core'

// const isDark = useDark()
// const toggleDark = useToggle(isDark)
//引入图片
let bgcImg = ref('url("/images/background2.webp")')
const getImage = (name) => {
    const ImageUrl = `/images/background${name}.webp`
    bgcImg.value = `url(${ImageUrl})`
    // console.log( bgcImg.value);
}
let count = 1
const { pause, resume, isActive } = useIntervalFn(() => {
    if (count >= 10) {
        count = 1
    } else {
        count++
    }
    getImage(count)
}, 10000)

</script>

<style scoped lang="scss">
.bgc{
  background:v-bind(bgcImg) !important;
  background-size: 100% 100%;
  transition: background 0.5s ease-out;
}
</style>
