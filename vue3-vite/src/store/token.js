import { defineStore } from "pinia";
const tokenStore = defineStore("tokenId", {
  state: () => {
    return {
        token: 1,
        user:{}
    };
  },
  getters: {
  },
  actions: {
  },
  persist: {
    enabled: true, // true 表示开启持久化保存
    storage: window.sessionStorage,
  },
});

export default tokenStore;
