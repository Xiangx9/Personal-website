<template>
    <div class="center">

        <div class="message" id='message-box'>
            <div v-for="(msg, index) in msgList" :key="index" :class="{
                'user': msg.role === 'user',
                'assistant': msg.role === 'assistant'
            }">
                <div>
                    <div>
                        <img class='role-img' :src="userImg" v-if="msg.role === 'user'" />
                    </div>
                    <div class='imgbox' v-if="msg.role === 'assistant'">
                        <img class='role-img' :src="aiImg" />
                        <!-- <div class='name'>讯飞AI</div> -->
                    </div>
                </div>
                <div v-highlight v-html='msg.content'></div>
            </div>
        </div>


        <div class="footer">
            <!-- <textarea v-model="msgValue" rows="5" placeholder="请输入问题" class="text" ></textarea> -->
            <!-- <button class="btn" @click="submitMsg"  >发送</button> -->

            <el-input v-model="msgValue" :autosize="{ minRows: 4, maxRows: 8 }" type="textarea" placeholder="请输入问题" />
            <div>
                <!-- <el-button type="primary" :icon="Microphone"></el-button>
                <el-button type="primary" :icon="Picture"></el-button> -->
                <el-button type="primary" @click="submitMsg" :icon="Search">发送</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Microphone, Picture, Search, } from '@element-plus/icons-vue'
import userImg from "/images/user.png"
import aiImg from "/images/ai.png"
import { nextTick, onMounted, ref } from 'vue'
import TTSRecorder from "./TTSRecorder"
import { userMsgStore } from '@/store/msgStore'
const msgStore = userMsgStore()
const msgValue = ref("")
let ttsRecorder = new TTSRecorder()
const msgList = ref([])
let msgDom = ref(null)

onMounted(() => {
    msgDom.value = document.getElementById("message-box")
    msgList.value = msgStore.list
    scroll()
})

// 滚动到最底部
const scroll = () => {
    nextTick(() => {
        msgDom.value.scrollTop = msgDom.value.scrollHeight
    })
}

// 发送消息
const submitMsg = async () => {
    if (!msgValue.value) {
        ElMessage.error('不能为空')
        return
    }
    msgStore.userAddMsg(msgValue.value)
    msgValue.value = ""
    // 开始提问
    ttsRecorder.start(msgStore, msgDom)
    scroll()
}
</script>

<style scoped lang="scss">
// .content {
//     height: 100%;
//     position: relative;



.message {
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    bottom: 150px;
    display: flex;
    overflow: auto;
    flex-direction: column;

    .user {
        background-color: rgba($color: #fff, $alpha: 0.5);
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-bottom: 1px solid #dfdfdf;
    }

    .assistant {
        background-color: rgba($color: #fff, $alpha: 0.5);
        padding: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #dfdfdf;
    }
}

.footer {
    position: absolute;
    bottom: 50px;
    left: 20%;
    right: 20%;
    display: flex;
    align-items: flex-end;
    margin: 0 20px;
    gap: 15px;

    .text {
        width: 100%;
    }

    .btn {
        width: 100px;
        height: 40px;
        background-color: #1a60ea;
        color: white;
        border: none;
    }
}

@media screen and (max-width: 768px) {

    .message,
    .footer {
        left: 0;
        right: 0;
    }

    .message {
        bottom: 100px;
    }

    .footer {
        bottom: 10px;
    }
}

// }

.imgbox {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    .name {
        font-size: 13px;
        color: #fd919e;
        font-weight: 400;
    }
}

.role-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}
</style>