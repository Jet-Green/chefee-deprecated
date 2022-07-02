import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'WelcomePage',
            component: WelcomePage,
        },
        {
            path: '/search',
            name: 'SearchPage',
            component: () => import('../views/SearchPage.vue'),
        },
    ]
})

export default router
