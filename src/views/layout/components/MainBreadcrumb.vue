<template>
    <div class="bread-cont">
        <span class="current-location">当前位置：</span>
        <transition-group name="breadcrumb" tag="div" class="ant-breadcrumb">
            <Breadcrumb.Item v-for="item in breadcrumbs" :key="item.path">{{ item.meta.title }}</Breadcrumb.Item>
        </transition-group>
    </div>
</template>

<script setup>
import { Breadcrumb } from 'ant-design-vue';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let breadcrumbs = ref([]);

const getBreadcrumbs = () => {
    let routeMatched = route.matched.filter(item => {
        if (!item.meta.topLevel) {
            return {
                path: item.path,
                meta: item.meta,
            };
        }
    });
    breadcrumbs.value = [{ path: '/', meta: { title: '首页' } }].concat(routeMatched);
};

watch(
    () => route.matched,
    () => {
        getBreadcrumbs();
    },
    {
        immediate: true,
    }
);
</script>

<style lang="less" scoped>
.bread-cont {
    z-index: 10;
    padding: 14px 20px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .ant-breadcrumb {
        display: inline-block;
    }

    span.current-location {
        color: #333;
    }
}

/* breadcrumb transition */
.breadcrumb-enter-from,
.breadcrumb-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.breadcrumb-leave-to {
    position: absolute;
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all 0.5s ease;
}
</style>
