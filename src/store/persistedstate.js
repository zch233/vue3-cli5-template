import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

// https://github.com/softvar/secure-ls
const ls = new SecureLS({ isCompression: false }); // 默认使用 Base64 编码
const debug = process.env.NODE_ENV === 'development';

// https://github.com/robinvdvleuten/vuex-persistedstate#readme
export const persistedState = () =>
    createPersistedState({
        key: process.env.VUE_APP_VUEX_PERSISTED_KEY,
        paths: ['auth.user'], // 用于部分保留状态于 localStorage 中的任何路径的数组。如果未给出路径，则保留完整状态。如果给定空数组，则不会保留任何状态。默认值: undefined
        storage: debug
            ? undefined
            : {
                  getItem: key => ls.get(key),
                  setItem: (key, value) => ls.set(key, value),
                  removeItem: key => ls.remove(key),
              },
    });
