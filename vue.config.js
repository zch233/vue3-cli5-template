const { defineConfig } = require('@vue/cli-service');
const path = require('path');

const resolve = dir => path.join(__dirname, '.', dir);

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@src': resolve('src'),
            },
        },
    },
    devServer: {
        port: 11223,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_API_URL_PROXY,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
});
