<template>
  <div class="yiyan" @click="handleTitle()">
    <div class="div_con" v-for="item in yiyanAyy" :key="item">
      <div class="hitokoto">{{ item.hitokoto || '永远相信美好的事即将发生' }}</div>
      <div class="from">- [ {{ item.from || '雷军' }} ]</div>
    </div>
  </div>
</template>

<script setup>
import myaxios from "axios";
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core'

//父传子
import { defineProps,defineEmits  } from "vue"
const {title} = defineProps(['title']) // 可以简写 解构
console.log(title);

//子传父
// 调用defineEmits方法 并接受父组件给绑定的事件
const emit = defineEmits(['handleAdd'])
const handleTitle = () => {
    emit("handleAdd", '我是子组件传递的数据')
}


const yiyanAyy = ref([
  {
    hitokoto: "",
    from: "",
  },
]);

const getYiyan = () => {
  myaxios.get("https://v1.hitokoto.cn/").then((res) => {
    const { data } = res;
    if (res.data.hitokoto.length <= 18) {
      let newData = [
        {
          hitokoto: data.hitokoto,
          from: data.from,
        },
      ];
      yiyanAyy.value = newData;
    }
    else {
      let newData = [
        {
          hitokoto: '永远相信美好的事即将发生',
          from: '雷军',
        },
      ];
      yiyanAyy.value = newData;
    }

  });
};
const { pause, resume, isActive } = useIntervalFn(() => {
 getYiyan()
}, 100000)

</script>

<style lang="scss" scoped>
.yiyan {
  width: 100%;
  height: 100%;
  color: #fff;

  .div_con {
    width: 95%;
    height: 95%;
    font-size: 20px;
    text-decoration: none;
    transition: 0.3s;
    text-align: center;
    letter-spacing: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .hitokoto {
      text-indent: 2em;
      padding-top: 30px;
      overflow: hidden;
    }

    .from {
      padding-top: 40px;
      text-align: right;
      padding-right: 10px;
      font-weight: bold;
    }
  }
}
</style>
