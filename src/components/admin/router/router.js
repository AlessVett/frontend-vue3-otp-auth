import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/admin/views/HomeView.vue";
import LoginView from "@/components/admin/views/LoginView.vue";
import InitView from "@/components/admin/views/InitView.vue";


const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '',
            component: InitView
        },
        {
            path: '/home',
            component: HomeView
        },
        {
            path: '/login',
            component: LoginView
        }
    ]
});

export default router;
