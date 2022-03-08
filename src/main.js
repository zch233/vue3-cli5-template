import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import '@src/styles/reset.css';
import '@src/utils/svg';

createApp(App).use(store).use(router).mount('#app');
