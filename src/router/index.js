import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Normal',
        component: () => import('@src/views/Demo/Normal'),
    },
    {
        path: '/demo1',
        name: 'JsxInSetup1',
        component: () => import('@src/views/Demo/JsxInSetup1'),
    },
    {
        path: '/demo2',
        name: 'JsxInSetup2',
        component: () => import('@src/views/Demo/JsxInSetup2'),
    },
    {
        path: '/demo3',
        name: 'ScriptWithSetup',
        component: () => import('@src/views/Demo/ScriptWithSetup'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@src/views/login/Login'),
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
