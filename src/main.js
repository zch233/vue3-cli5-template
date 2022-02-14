import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import '@src/utils/svg';
import { componentsPlugin } from './plugins/antd.js';
var app = createApp(App);
componentsPlugin(app);
app.use(store).use(router).mount('#app');
