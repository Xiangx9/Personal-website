<template>
    <div style="position: absolute;">
        <el-table border :data="Data" style="width: 100%" max-height="500">
            <el-table-column fixed prop="user_name" label="姓名" width="" />
            <el-table-column prop="is_admin" label="权限" width="">
                <template #default="scope">
                    <el-switch disabled v-model="scope.row.is_admin" inline-prompt active-text="是" inactive-text="否" />
                </template>
            </el-table-column>
            <el-table-column label="操作项" width="">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle @click.prevent="EditRow(scope.row)" />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { Edit, } from '@element-plus/icons-vue'

const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
    prop2: {
        type: Number,
        default: 42
    }
});
let Data = props.tableData.list
console.log('tableData', props.tableData);

const EditRow = (row: any) => {
    console.log(row);

}


</script>