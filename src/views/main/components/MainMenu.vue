<template>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
        <template v-for="item in menuList">
            <a-sub-menu :key="item.openKeys" v-if="item.child">
                <template #title>
                    <span class="anticon">
                        <component :is="item.icon" />
                    </span>
                    <span> {{ item.name }}</span>
                </template>
                <a-menu-item v-for="cItem in item.child" :key="cItem.key">{{ cItem.name }}</a-menu-item>
            </a-sub-menu>
            <!-- 无子集 -->
            <a-menu-item :key="item.key" v-else>
                <template #icon>
                    <component :is="item.icon" />
                </template>
                <span>{{ item.name }}</span>
            </a-menu-item>
        </template>
        <!-- <a-sub-menu key="sub1">
                        <template #title>
                            <span class="anticon">
                                <user-outlined />
                            </span>
                            <span> subnav 1</span>
                        </template>
                        <a-menu-item key="/normal">Nomarl</a-menu-item>
                        <a-menu-item key="/demo1">JsxInSetup1</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span class="anticon">
                                <laptop-outlined />
                            </span>
                            <span> subnav 2</span>
                        </template>
                        <a-menu-item key="/demo2">JsxInSetup2</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="/demo3">
                        <template #icon>
                            <notification-outlined />
                        </template>
                        <span>ScriptWithSetup</span>
                    </a-menu-item> -->
    </a-menu>
</template>

<script setup>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { watch, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

let selectedKeys = ref(['normal']);
let openKeys = ref(['sub1']);

const menuList = ref([
    {
        openKeys: 'sub1', // 一级分类key
        name: 'subnav 1', // 一级分类名称
        icon: UserOutlined, // 菜单图标
        child: [
            {
                name: 'Normal', // 菜单的名称
                key: 'Normal', // 路由的名字
            },
            {
                name: 'JsxInSetup1',
                key: 'JsxInSetup1',
            },
        ],
    },
    {
        icon: NotificationOutlined,
        name: 'ScriptWithSetup',
        key: 'ScriptWithSetup',
    },
    {
        openKeys: 'sub2',
        icon: LaptopOutlined,
        name: 'subnav 2',
        child: [
            {
                name: 'JsxInSetup2',
                key: 'JsxInSetup2',
            },
        ],
    },
]);
watch(selectedKeys, val => {
    router.push({ name: val[0] });
});
// 获取当前展开的keys
const getOpenKeys = () => {
    let str = '';
    menuList.value.forEach(item => {
        if (item.child) {
            item.child.forEach(item2 => {
                if (item2.key === selectedKeys.value[0]) {
                    str = item.openKeys;
                }
            });
        }
    });
    return str;
};

onMounted(() => {
    selectedKeys.value[0] = route.name;
    openKeys.value[0] = getOpenKeys();
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
