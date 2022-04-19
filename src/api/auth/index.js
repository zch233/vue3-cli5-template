import { request } from '@src/utils/request';

export const getUser = () =>
    request({
        url: '/admin/getmemberinfo',
        method: 'post',
        // multiple: true, // 是否可以进行多次请求
    });
