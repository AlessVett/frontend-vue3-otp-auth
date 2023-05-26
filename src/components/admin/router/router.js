import { createRouter, createWebHistory } from "vue-router";
import AppView from "@/components/admin/views/AppView.vue";
import HomeAppView from "@/components/admin/views/App/HomeAppView.vue";
import ExploreAppView from "@/components/admin/views/App/ExploreAppView.vue";
import ProfileAppView from "@/components/admin/views/App/ProfileAppView.vue";
import LoginView from "@/components/admin/views/LoginView.vue";
import InitView from "@/components/admin/views/InitView.vue";


const router = createRouter({
    history: createWebHistory('/'),
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    routes: [
        {
            path: '',
            component: InitView
        },
        {
            path: '/app',
            component: AppView,
            children: [
                {
                    path: '',
                    component: HomeAppView
                },
                {
                    path: 'explore',
                    component: ExploreAppView
                },
                {
                    path: 'profile',
                    component: ProfileAppView
                }
            ]
        },
        {
            path: '/login',
            component: LoginView
        }
    ]
});

export default router;
