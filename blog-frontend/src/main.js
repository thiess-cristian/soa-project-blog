import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3003'
createApp(App).use(router, axios).mount("#app");

