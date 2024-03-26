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
                        <el-avatar :size="50" :src="circleUrl" style="width: 120px; height: 120px;" />
                        <div style="display: flex; flex-direction: column; position: relative; margin-left: 15px;">
                            <div v-if="EditInp" style="font-size: 30px;">{{ input.name }}</div>
                            <el-input v-else v-model="input.name" clearable class="demo-form"
                                :style="EditInp ? styinp : ''" />
                            <br>
                            <div v-if="EditInp" style="font-size: 15px;">{{ input.phone }}</div>
                            <el-input v-else v-model.number="input.phone" clearable class="demo-form"
                                :style="EditInp ? styinp : ''" />
                        </div>
                    </div>
                    <div>
                        <h1>个人介绍</h1>
                    </div>
                </div>
            </el-card>
        </el-scrollbar>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { Edit, View as IconView } from '@element-plus/icons-vue'

const loading = ref(true)

const circleUrl = ref('')
const input = ref({
    name: 'xx',
    phone:'17343672511'
})

const EditInp = ref(true)
const styinp = ref({

})
const EditFn = () => {
    EditInp.value = !EditInp.value
}


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