import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Normal',
        component: () => import('@src/views/Demo/Normal.vue'),
    },
    {
        path: '/demo1',
        name: 'JsxInSetup1',
        component: () => import('@src/views/Demo/JsxInSetup1.vue'),
    },
    {
        path: '/demo2',
        name: 'JsxInSetup2',
        component: () => import('@src/views/Demo/JsxInSetup2.jsx'),
    },
    {
        path: '/demo3',
        name: 'ScriptWithSetup',
        component: () => import('@src/views/Demo/ScriptWithSetup.vue'),
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
