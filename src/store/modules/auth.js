import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// export const useUser = defineStore({
//   // id: 必须的，在所有 Store 中唯一
//   id: "user",
//   state: ()=> ({
//     name: {name: 'from pinia userName'},
//     nickname: 'from pinia nickname',
//     token: 'dddfff',
//   }),
//   getters: {
//     fullName: state => state.name.name + state.nickname
//     // fullName: () => this.name + this.nickname
//   },
//   actions: {
//     changeName() {
//       this.name.name = 'changeName userName'
//     },
//   },
//   persist: true,
// });

// 第二种写法
export const useUser = defineStore(
    'user',
    () => {
        const name = ref('from pinia userName');
        const nickname = ref('from pinia nickname');
        const token = ref('dddfff');
        const fullName = computed(() => name.value + ',' + nickname.value);
        const changeName = () => {
            name.value = 'changeName userName' + Math.random();
        };

        return {
            name,
            token,
            nickname,
            fullName,
            changeName,
        };
    },
    {
        persist: {
            // paths: ['token'] // 需要持久化的数据
        },
    }
);
