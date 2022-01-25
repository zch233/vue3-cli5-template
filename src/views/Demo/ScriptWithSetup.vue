<template>
    <section>
        <p><label>姓名：</label>{{ user.name }}</p>
        <p><label>年龄：</label>{{ user.age }}</p>
        <button @click="handleClick">click me!</button>
        <HelloWorld />
    </section>
</template>

<script setup>
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
import { reactive } from 'vue';
import HelloWorld from '@src/components/HelloWorld.vue';

const handleClick = () => alert('hi');
const user = reactive({
    name: 'test',
    age: 18,
});
</script>
