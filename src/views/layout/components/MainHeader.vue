<template>
    <div class="header-cont">
        <div class="left">后台管理</div>
        <div class="right">
            <Dropdown placement="bottomRight" :trigger="['click']">
                <a class="ant-dropdown-link" @click.prevent>
                    <Avatar :size="32" src="https://aliyuncdn.antdv.com/vue.png" />
                    <span class="nickname">昵称</span>
                </a>
                <template #overlay>
                    <Menu @click="onClick">
                        <Menu.Item key="1">
                            <unordered-list-outlined />
                            用户列表
                        </Menu.Item>
                        <Menu.Item key="2">
                            <UserOutlined />
                            个人中心
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="Login">
                            <LogoutOutlined />
                            退出登录
                        </Menu.Item>
                    </Menu>
                </template>
            </Dropdown>
        </div>
    </div>
</template>
<script setup>
import { Dropdown, Avatar, Menu } from 'ant-design-vue';
import { UserOutlined, LogoutOutlined, UnorderedListOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const onClick = ({ key }) => {
    // 其他路由暂无
    if (key === 'Login') {
        router.push({ name: key });
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
