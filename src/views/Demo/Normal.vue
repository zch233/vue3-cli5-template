<template>
    <div class="home">
        <p :style="{ color: theme.masterColor }">22222</p>
        <Icon icon="empty" />
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-empty`" />
        </svg>
        <button @click="componentVisible = !componentVisible">隐藏组件</button>
        {{ user.name }}
        {{ token }}
        <HelloWorld v-if="componentVisible" :msg="testState" />
        <hr />
    </div>
</template>

<script>
import HelloWorld from '@src/components/HelloWorld.vue';
import Icon from '@src/components/Icon';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import theme from '@src/styles/theme/index.less';

console.log(theme);
export default {
    name: 'Normal',
    components: {
        Icon,
        HelloWorld,
    },
    setup() {
        const componentVisible = ref(true);
        const store = useStore();
        onMounted(() => {
            // console.log('home mounted');
        });
        return {
            testState: computed(() => store.state.testState),
            user: computed(() => store.getters.user),
            token: computed(() => store.getters.token),
            componentVisible,
            current: ref(5),
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
