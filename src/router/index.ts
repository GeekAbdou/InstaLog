import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
        meta: { requiresGuest: true, title: 'Login | Instabug' },
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/WelcomeView.vue'),
        meta: { requiresAuth: true, title: 'Welcome | Instabug' },
    },
    {
        path: '/404',
        component: () => import('@/views/NotFoundView.vue'),
        meta: { title: 'User Feedback & Bug reporting' },
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title =
        (to.meta.title as string) || ('Instabug Login App' as string)

    const isAuth = store.getters.isAuth

    if (to.matched.some((route) => route.meta.requiresAuth)) {
        if (!isAuth) {
            next('/login')
        } else {
            next()
        }
    } else if (to.matched.some((route) => route.meta.requiresGuest)) {
        if (isAuth) {
            next('/welcome')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
