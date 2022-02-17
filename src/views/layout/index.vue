<template>
    <a-layout class="main">
        <a-layout-header class="header">
            <MainHeader />
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" v-model:collapsed="collapsed" collapsible>
                <MainSlider />
            </a-layout-sider>
            <a-layout>
                <MainBreadcrumb />
                <a-layout-content>
                    <router-view v-slot="{ Component }">
                        <transition name="fade-transform" mode="out-in">
                            <component :is="Component" class="cont" />
                        </transition>
                    </router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script setup>
import MainHeader from './components/MainHeader.vue';
import MainSlider from './components/MainMenu.vue';
import MainBreadcrumb from './components/MainBreadcrumb.vue';
import { ref } from 'vue';

let collapsed = ref(false);
</script>

<style lang="less" scoped>
.ant-layout.main {
    height: 100vh;

    .ant-layout-header {
        position: relative;
        z-index: 11;
        background-color: #fff;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }

    .ant-layout-content {
        padding: 16px;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;

        .cont {
            min-height: 100%;
            // 并不是每个页面都需要加padding
            padding: 20px;
            background-color: #fff;
        }
    }

    :deep(.ant-layout-sider-trigger) {
        background-color: #fff;
        border-top: 1px solid @borderColor;

        .anticon {
            color: @masterColor;
        }
    }
}
/* 页面切换动画 */
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.4s ease;
}

.fade-transform-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
