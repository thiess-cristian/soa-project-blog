import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

axios.defaults.baseURL = 'http://localhost:3000'

const RegisterForm = defineAsyncComponent(() => import('registerFrontend/RegisterForm'));

let app = createApp(App)

app.component('content-element', RegisterForm);

app.use(store).use(router, axios).mount('#app')
