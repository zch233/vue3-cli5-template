<template>
    <div class="title">后台管理</div>
    <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名' }]">
            <a-input v-model:value="formState.username" placeholder="用户名">
                <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
            <a-input-password v-model:value="formState.password" placeholder="密码" @keypress.enter="onFinish">
                <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                </template>
            </a-input-password>
        </a-form-item>

        <div class="login-form-wrap">
            <a-form-item name="remember" no-style>
                <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
            </a-form-item>
        </div>

        <a-form-item>
            <a-button type="primary" html-type="submit" class="login-form-button"> 登 录 </a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const formState = reactive({
    username: '',
    password: '',
    remember: true,
});

const router = useRouter();

const onFinish = values => {
    console.log('Success:', values);
    router.push('/');
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
</script>
<style lang="less" scoped>
.title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.login-form {
    width: 380px;
    max-width: 100%;

    .login-form-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .login-form-button {
        width: 100%;
    }
}
</style>
