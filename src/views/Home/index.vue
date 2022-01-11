<template>
    <div class="home">
        <Icon icon="empty" />
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-empty`" />
        </svg>
        {{ user.name }}
        {{ token }}
        <HelloWorld :msg="testState" />
    </div>
</template>

<script>
import HelloWorld from '@src/components/HelloWorld.vue';
import Icon from '@src/components/Icon';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Home',
    components: {
        Icon,
        HelloWorld,
    },
    setup() {
        const store = useStore();
        onMounted(() => {
            console.log('home mounted');
        });
        return {
            testState: computed(() => store.state.testState),
            user: computed(() => store.getters.user),
            token: computed(() => store.getters.token),
        };
    },
};
</script>
