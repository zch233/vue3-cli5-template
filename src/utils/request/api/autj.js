import { request } from '../index';

export const getUser = () =>
    request({
        url: '/admin/getmemberinfo',
        method: 'post',
    });
