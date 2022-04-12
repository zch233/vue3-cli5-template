import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import SecureLS from 'secure-ls';

// https://github.com/softvar/secure-ls
const ls = new SecureLS({ isCompression: false }); // 默认使用 Base64 编码

const debug = process.env.NODE_ENV === 'development';
export const store = createPinia().use(
    createPersistedState({
        storage: debug
            ? undefined
            : {
                  getItem: key => ls.get(key),
                  setItem: (key, value) => ls.set(key, value),
                  removeItem: key => ls.remove(key),
              },
    })
);
