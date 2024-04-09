<template>
    <div>
        <el-table border :data="Data" style="width: 100%" max-height="300" table-layout="auto">
            <el-table-column prop="user_name" label="姓名" width="" />
            <el-table-column prop="is_admin" label="权限" width="">
                <template #default="scope">
                    <el-switch v-model="scope.row.is_admin" inline-prompt active-text="是" inactive-text="否" />
                </template>
            </el-table-column>
            <el-table-column label="操作项" width="">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click.prevent="EditRow(scope.row)" />
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange" small layout="prev, pager, next"
            :current-page="props.tableData.value.pageNum" :page-size="props.tableData.value.pageSize"
            :default-page-size="5" :total="props.tableData.value.total" />
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { MyShow } from '../../../api/api'
import { ElMessage } from 'element-plus'
let { updateUser, } = MyShow

// 用户数据
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
});
let Data = ref(props.tableData.value.list)

// 编辑
let type = ref('success')
const EditRow = async (row: any) => {
    console.log();
    const { data: res } = await updateUser(row.id, row)
    type.value = res.code == 0 ? 'success' : 'error'
    ElMessage({
        showClose: true,
        message: '修改成功',
        type: type.value,
    })
}

// 分页
const emit = defineEmits(['handleCurrentChange'])
const handleCurrentChange = (val) => {
    emit("handleCurrentChange", val)
}

watch(
    () => props.tableData.value.list,
    (newValue, oldValue) => {
        // 此时 `newValue` 此处和 `oldValue` 是不相等的
        Data.value=newValue
        console.log('deep', newValue, oldValue)
    },
    { deep: true }
)
</script>