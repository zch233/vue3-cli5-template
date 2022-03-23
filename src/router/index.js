import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Normal',
        component: () => import('@src/views/Demo/Normal'),
    },
    {
        path: '/normal',
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
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
