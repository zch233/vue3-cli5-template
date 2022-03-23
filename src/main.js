import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './router/routerGuard';
import { store } from './store';
import '@src/utils/svg';
import '@src/styles/reset.css';
import '@src/styles/global.less';

createApp(App).use(store).use(router).mount('#app');
