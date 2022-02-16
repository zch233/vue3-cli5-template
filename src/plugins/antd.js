import { Avatar, Breadcrumb, Button, Checkbox, Form, Input, Layout, Menu, Pagination, Dropdown } from 'ant-design-vue';
const components = [Button, Pagination, Form, Input, Checkbox, Layout, Menu, Breadcrumb, Avatar, Dropdown];
export const componentsPlugin = app => components.forEach(app.use, app);
