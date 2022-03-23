<template>
    <nav>
        <router-link to="/">Normal</router-link> | <router-link to="/demo1">JSXInSetup1</router-link> | <router-link to="/demo2">JSXInSetup2</router-link> |
        <router-link to="/demo3">ScriptWithSetup</router-link> | <router-link to="/normal">NormalAgain</router-link> |
    </nav>
    <router-view />
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}

nav {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
