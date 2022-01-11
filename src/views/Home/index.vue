<template>
    <div class="home">
        <Icon icon="empty" />
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-empty`" />
        </svg>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from '@src/components/HelloWorld.vue';
import Icon from '@src/components/Icon';

export default {
    name: 'Home',
    components: {
        Icon,
        HelloWorld,
    },
    mounted() {
        console.log(11111, this.a?.s);
    },
};
</script>
