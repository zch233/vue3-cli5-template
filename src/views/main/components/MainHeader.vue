<template>
    <div class="header-cont">
        <div class="left">后台管理</div>
        <div class="right">
            <a-dropdown placement="bottomRight" :trigger="['click']">
                <a class="ant-dropdown-link" @click.prevent>
                    <a-avatar :size="32" src="https://aliyuncdn.antdv.com/vue.png" />
                    <span class="nickname">昵称</span>
                </a>
                <template #overlay>
                    <a-menu @click="onClick">
                        <a-menu-item key="1">
                            <unordered-list-outlined />
                            用户列表
                        </a-menu-item>
                        <a-menu-item key="2">
                            <UserOutlined />
                            个人中心
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="Login">
                            <LogoutOutlined />
                            退出登录
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>
<script setup>
import { UserOutlined, LogoutOutlined, UnorderedListOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const onClick = ({ key }) => {
    // 其他路由暂无
    if (key === 'Login') {
        router.push(key);
    }
};
</script>

<style lang="less" scope>
.header-cont {
    display: flex;
    justify-content: space-between;

    .right {
        .ant-dropdown-link {
            display: block;
            height: 100%;
        }

        .ant-avatar {
            border: 1px solid @borderColor;
        }

        .nickname {
            margin-left: @space4;
            color: rgba(0, 0, 0, 0.65);
        }
    }
}
</style>
