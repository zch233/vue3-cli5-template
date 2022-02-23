<template>
    <Menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
        <template v-for="item in menuList">
            <template v-if="item.meta.topLevel">
                <Menu.Item :key="item.children[0].name">
                    <template #icon>
                        <component :is="item.meta.icon" />
                    </template>
                    {{ item.meta.title }}
                </Menu.Item>
            </template>
            <template v-else>
                <SubMenu :key="item.path">
                    <template #icon>
                        <component :is="item.meta.icon" />
                    </template>
                    <template #title>{{ item.meta.title }}</template>
                    <Menu.Item v-for="subItem in item.children" :key="subItem.name">{{ subItem.meta.title }}</Menu.Item>
                </SubMenu>
            </template>
        </template>
    </Menu>
</template>

<script setup>
import { Menu } from 'ant-design-vue';
const { SubMenu } = Menu;
import { watch, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getRoutes } from '@src/router';

const router = useRouter();
const route = useRoute();

let selectedKeys = ref([]);
let openKeys = ref([]);
const menuList = ref([]);

watch(selectedKeys, value => {
    router.push({ name: value[0] });
});

const getMenuList = () => {
    menuList.value = getRoutes().filter(item => {
        if (item.meta) return item;
    });
};

// 获取当前展开的keys
const getOpenKeys = () => {
    return ['/' + selectedKeys.value[0].split('.')[0]];
};

onMounted(() => {
    getMenuList();
    selectedKeys.value[0] = route.name;
    openKeys.value = getOpenKeys();
});
</script>

<style lang="less" scoped>
.ant-layout-sider {
    height: calc(100vh - 112px);
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    border-right: 1px solid @borderColor;
}
</style>
