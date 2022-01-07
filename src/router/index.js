import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: import('@src/views/Home'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
