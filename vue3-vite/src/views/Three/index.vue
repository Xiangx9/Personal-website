<template>
    <div class="demo"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import {render} from './index'
onMounted(() => {
    render()
});
</script>
<style scoped></style>
