<template>
    <div class="home">
        <img alt="Vue logo" :src="require('@src/assets/logo.png')" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from '@src/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    mounted() {
        console.log(11111, this.a?.s);
    },
};
</script>
