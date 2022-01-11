export const auth = {
    namespaced: true,
    state() {
        return {
            user: { name: 'testName', token: '123abc' },
        };
    },
};
