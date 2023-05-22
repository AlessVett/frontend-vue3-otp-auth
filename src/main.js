import { createApp } from 'vue'
import App from './App.vue'
// import '@/assets/scss/main.scss'
import router from "@/components/admin/router/router";

createApp(App)
    .use(router)
    .mount('#app')
