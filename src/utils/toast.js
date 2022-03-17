import { Toast } from 'vant';

export const showLoadingToast = options => Toast.loading({ message: '加载中...', duration: 0, forbidClick: true, ...options });

export const showOverlayLoadingToast = options => Toast.loading({ message: '加载中...', duration: 0, forbidClick: true, overlay: true, ...options });

export const clearToast = () => Toast.clear();

export const showSuccessToast = options => Toast.success({ message: '操作成功', ...options });

export const showFailToast = options => Toast.fail({ message: '出错了', ...options });

export const showToast = options => Toast({ message: '出错了', ...options });
