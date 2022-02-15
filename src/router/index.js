import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@src/views/login/Login'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@src/views/404'),
    },
    {
        path: '/',
        component: () => import('@src/views/main'),
        redirect: '/normal',
        children: [
            {
                path: '/normal',
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
        ],
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
