import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import Camera from '../views/Camera.vue'

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
        }, {
            path: '/camera',
            name: 'Camera',
            component: Camera,
        },
    ]
})

export default router
