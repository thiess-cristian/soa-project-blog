import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const Post = defineAsyncComponent(() => import("admin/Post"));

const app = createApp(App);

app.component("content-element", Post)

app.mount('#app')
