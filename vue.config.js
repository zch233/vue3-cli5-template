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
    if (process.env.VUE_APP_RUN_Bundle_Analyzer_Plugin) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        prodPlugins.push(
            new BundleAnalyzerPlugin({
                analyzerPort: 'auto',
            }) //打包后文件大小概览
        );
    }
}

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: 'warning',
    chainWebpack: config => {
        const rule = config.module.rule('js');
        // 清理自带的babel-loader
        rule.uses.clear();
        // 添加esbuild-loader
        rule.use('esbuild-loader')
            .loader('esbuild-loader')
            .options({
                loader: 'jsx',
                target: 'es2015',
            })
            .end();

        // https://github.com/neutrinojs/webpack-chain
        config.module.rule('svg').exclude.add(resolve('src/assets/svg')).end();

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end()
            .before('svg-sprite-loader')
            .use('svgo-loader')
            .loader('svgo-loader')
            .end();
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@src': resolve('src'),
            },
        },
        plugins: [...prodPlugins],
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/styles/theme/index.less')],
        },
    },
    devServer: {
        port: 11223,
        proxy: {
            [process.env.VUE_APP_API_URL]: {
                target: process.env.VUE_APP_API_URL_PROXY,
                changeOrigin: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_API_URL}`]: '',
                },
            },
        },
    },
});
