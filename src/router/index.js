import { createRouter, createWebHashHistory } from 'vue-router';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import layout from '@src/views/layout';
import NProgress from 'nprogress';
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
        component: layout,
        redirect: '/ScriptWithSetup',
        meta: {
            icon: UserOutlined,
            title: 'ScriptWithSetup',
            topLevel: true,
        },
        children: [
            {
                path: '/ScriptWithSetup',
                name: 'ScriptWithSetup',
                component: () => import('@src/views/Demo/ScriptWithSetup'),
                meta: {
                    title: 'ScriptWithSetup',
                },
            },
        ],
    },
    {
        path: '/Subnav',
        component: layout,
        redirect: '/Subnav/Normal',
        meta: {
            icon: LaptopOutlined,
            title: 'Subnav',
        },
        children: [
            {
                path: '/Subnav/Normal',
                name: 'Subnav.Normal',
                component: () => import('@src/views/Demo/Normal'),
                meta: {
                    title: 'Normal',
                },
            },
        ],
    },
    {
        path: '/JsxInSetup',
        component: layout,
        redirect: '/JsxInSetup/JsxInSetup1',
        meta: {
            icon: NotificationOutlined,
            title: 'JsxInSetup',
        },
        children: [
            {
                path: '/JsxInSetup/JsxInSetup1',
                name: 'JsxInSetup.JsxInSetup1',
                component: () => import('@src/views/Demo/JsxInSetup1'),
                meta: {
                    title: 'JsxInSetup1',
                },
            },
            {
                path: '/JsxInSetup/JsxInSetup2',
                name: 'JsxInSetup.JsxInSetup2',
                component: () => import('@src/views/Demo/JsxInSetup2'),
                meta: {
                    title: 'JsxInSetup2',
                },
            },
        ],
    },
];

export const getRoutes = () => {
    return routes;
};

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // 路由切换回滚到指定位置
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

const WHITE_LIST = ['/login', '/404'];
router.beforeEach((to, from, next) => {
    NProgress.start();
    const token = '11';
    if (token) {
        next();
    } else {
        if (WHITE_LIST.includes(to.path)) {
            next();
        } else {
            next({ path: '/login', query: { ...to.query, redirect: to.path } });
        }
    }
});
router.afterEach(() => {
    NProgress.done();
});
