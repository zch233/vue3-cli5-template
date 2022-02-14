import { Button, Pagination } from 'ant-design-vue';
const components = [Button, Pagination];
export const componentsPlugin = app => components.forEach(app.use, app);
