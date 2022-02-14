import { Button, Checkbox, Form, Input, Pagination } from 'ant-design-vue';
const components = [Button, Pagination, Form, Input, Checkbox];
export const componentsPlugin = app => components.forEach(app.use, app);
