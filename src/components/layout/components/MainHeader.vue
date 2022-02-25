<template>
    <div class="header-cont">
        <div class="left">后台管理</div>
        <div class="center"></div>
        <div class="right">
            <component :is="isFullScreen ? FullscreenExitOutlined : FullscreenOutlined" @click="switchFullScreen" />
            <Badge count="5" class="header-right__badge">
                <BellOutlined />
            </Badge>
            <Dropdown placement="bottomRight" :trigger="['click']" overlayClassName="header-right__dropdown">
                <a class="ant-dropdown-link" @click.prevent>
                    <Avatar :size="40">
                        <template #icon><UserOutlined /></template>
                    </Avatar>
                </a>
                <template #overlay>
                    <Menu @click="handleMenuClick">
                        <div>
                            <Avatar :size="40">
                                <template #icon><UserOutlined /></template>
                            </Avatar>
                            <div>
                                <p>用户名</p>
                                <p>13912341234</p>
                            </div>
                        </div>
                        <Menu.Item>
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
import { ref } from 'vue';
import { Dropdown, Avatar, Menu, message, Badge } from 'ant-design-vue';
import { UserOutlined, LogoutOutlined, FullscreenExitOutlined, FullscreenOutlined, BellOutlined } from '@ant-design/icons-vue';
import screenfull from 'screenfull';
import { useRouter } from 'vue-router';
const router = useRouter();

// 全屏显示
const isFullScreen = ref(false);
const switchFullScreen = () => {
    if (!screenfull.isEnabled) {
        return message.error('您的浏览器不支持全屏');
    }
    isFullScreen.value = !isFullScreen.value;
    screenfull.toggle();
};

const handleMenuClick = ({ key }) => {
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
        display: flex;
        align-items: center;

        > span {
            margin-right: 20px;
        }

        .ant-badge {
            cursor: pointer;
        }

        .ant-avatar {
            margin-left: 16px;
            border: 1px solid @borderColor;
        }

        .anticon.anticon-bell,
        .anticon.anticon-fullscreen,
        .anticon.anticon-fullscreen-exit {
            font-size: 22px;
            color: @masterColor;
        }
    }

    .center {
        flex: 1;
    }
}

.header-right__dropdown {
    width: 200px;

    .ant-dropdown-menu {
        > div {
            display: flex;
            padding: 5px 12px;
            margin-bottom: 5px;
            border-bottom: 1px solid #f0f0f0;
            align-items: center;

            .ant-avatar {
                margin-right: 20px;
            }

            p {
                margin-bottom: 0;
                font-size: 15px;
                line-height: 25px;
            }
        }
    }
}
</style>
