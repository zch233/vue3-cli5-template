import { auth } from '@src/store/modules/auth.js';
import { persistedState } from '@src/store/persistedstate.js';
import { createStore, createLogger } from 'vuex';
import * as getters from './getters';

const debug = process.env.NODE_ENV === 'development';

export const store = createStore({
    state() {
        return {
            testState: '来自 vuex 的 data',
        };
    },
    getters,
    modules: { auth },
    strict: debug,
    plugins: debug ? [createLogger(), persistedState()] : [persistedState()],
});
