<template>
    <div class="title">后台管理</div>
    <Form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
        <Form.Item name="username" :rules="[{ required: true, message: '请输入用户名' }]">
            <Input v-model:value="formState.username" placeholder="用户名" @keydown.enter="onFinish">
                <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                </template>
            </Input>
        </Form.Item>

        <Form.Item name="password" :rules="[{ required: true, message: '请输入密码' }]">
            <Input.Password v-model:value="formState.password" placeholder="密码" @keydown.enter="onFinish">
                <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                </template>
            </Input.Password>
        </Form.Item>

        <div class="login-form-wrap">
            <Form.Item name="remember" no-style>
                <Checkbox v-model:checked="formState.remember">记住密码</Checkbox>
            </Form.Item>
        </div>

        <Form.Item>
            <Button type="primary" html-type="submit" class="login-form-button"> 登 录 </Button>
        </Form.Item>
    </Form>
</template>
<script setup>
import { Form, Input, Button, Checkbox } from 'ant-design-vue';
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
