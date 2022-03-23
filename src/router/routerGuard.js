import { router } from '@src/router/index';
import { isNavigationFailure } from 'vue-router';

router.beforeEach(to => {
    // https://github.com/vuejs/rfcs/blob/master/active-rfcs/0037-router-return-guards.md#motivation
    if (to.path === '/normal') {
        return { path: '/' };
    }
});
router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
        console.error('路由错误啦', failure);
    }
});
