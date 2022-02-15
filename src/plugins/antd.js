import { Breadcrumb, Button, Checkbox, Form, Input, Layout, Menu, Pagination } from 'ant-design-vue';
const components = [Button, Pagination, Form, Input, Checkbox, Layout, Menu, Breadcrumb];
export const componentsPlugin = app => components.forEach(app.use, app);
