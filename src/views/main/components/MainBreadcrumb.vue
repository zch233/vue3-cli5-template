<template>
    <div class="bread-cont">
        <span class="current-location">当前位置：</span>
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

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
</style>
