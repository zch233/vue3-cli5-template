<template>
    <div class="login-box">
        <div class="container">
            <transition name="breadcrumb" mode="out-in" appear>
                <header>
                    <img :src="loginImg" alt="" class="login-img" />
                    <div class="top"></div>
                    <div class="left"></div>
                </header>
            </transition>
            <transition name="fade-transform" mode="out-in" appear>
                <div class="right">
                    <div class="form-box">
                        <LoginForm />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginForm from './LoginForm';

const loginImg = ref(require('@src/assets/images/login/41@2x.png'));
</script>

<style scoped lang="less">
.login-box {
    width: 100%;
    height: 100vh;
    background-color: #fafafc;

    .container {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-areas: 'header content';
        grid-template-rows: 1fr;
        grid-template-columns: 62.5% 37.5%;
    }

    header {
        position: relative;
        width: 100%;
        height: 100%;
        grid-area: header;

        .login-img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            max-width: 1000px;
            padding: 0 22px;
            content: '';
            transform: translate(-50%, -50%);
        }

        .top {
            position: absolute;
            top: -11%;
            left: 10%;
            width: 20%;
            height: 20%;
            background-image: url('@src/assets/images/login/10@2x.png');
            background-repeat: no-repeat;
            background-size: contain;
            content: '';
        }

        .left {
            position: absolute;
            bottom: 0;
            left: -8%;
            width: 20%;
            height: 20%;
            background-image: url('@src/assets/images/login/20@2x.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            content: '';
        }
    }

    .right {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        grid-area: content;
        background-color: #fff;
    }

    .form-box {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    /* fade-transform */
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all 0.5s;
    }

    .fade-transform-enter-from {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /* breadcrumb transition */
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all 0.5s;
    }

    .breadcrumb-enter-from,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }

    .breadcrumb-move {
        transition: all 0.5s;
    }

    .breadcrumb-leave-active {
        position: absolute;
    }
}
</style>
