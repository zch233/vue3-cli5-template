import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import '@src/utils/svg';
import '@src/styles/global.less';
import 'nprogress/nprogress.css';
var app = createApp(App);
app.use(store).use(router).mount('#app');
