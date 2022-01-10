const { defineConfig } = require('@vue/cli-service');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const resolve = dir => path.join(__dirname, '.', dir);

const prodPlugins = [];

if (process.env.NODE_ENV !== 'development') {
    prodPlugins.push(
        new CompressionPlugin({
            algorithm: 'gzip', //开启gzip
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
        })
    );
}

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@src': resolve('src'),
            },
        },
        plugins: [...prodPlugins],
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
