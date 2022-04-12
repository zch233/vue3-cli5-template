<template>
    <div class="home">
        <p :style="{ color: theme.masterColor }">22222</p>
        <Icon icon="empty" />
        <svg @click="user.changeName" class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-empty`" />
        </svg>
        <button @click="componentVisible = !componentVisible">隐藏组件</button>
        <p><b>name(pinia)</b>:{{ user.name }}</p>
        <p><b>userName(pinia)</b>:{{ user.fullName }}</p>
        <p><b>token(pinia)</b>:{{ user.token }}</p>
        <HelloWorld v-if="componentVisible" :msg="user.name" />
    </div>
</template>

<script>
import HelloWorld from '@src/components/HelloWorld.vue';
import Icon from '@src/components/Icon';
import { onMounted, ref } from 'vue';
import theme from '@src/styles/theme/index.less';
import { useUser } from '@src/store/modules/auth';

console.log(theme);
export default {
    name: 'Normal',
    components: {
        Icon,
        HelloWorld,
    },
    setup() {
        const componentVisible = ref(true);
        const user = useUser();
        onMounted(() => {
            console.log('home mounted');
        });
        return {
            user,
            componentVisible,
            theme,
        };
    },
};
</script>

<style lang="less">
p {
    padding: @space2;
}
</style>
