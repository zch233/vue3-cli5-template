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
    publicPath: './',
    transpileDependencies: true,
    lintOnSave: 'warning',
    chainWebpack: config => {
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
        output: {
            filename: `js/[name].[hash].js`,
            chunkFilename: `js/[name].[hash].js`,
        },
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/styles/theme/index.less')],
        },
    },
    css: {
        loaderOptions: {
            css: {
                modules: {
                    // https://next.cli.vuejs.org/guide/css.html#css-modules
                    // 此特性是为了将变量从 CSS 传递给 JS。CSS Module 通过 Interoperable CSS (ICSS) 实现此特性，ICSS 作为 CSS Modules 的低级文件格式规范，只是在标准 CSS 中额外增加了两个的伪选择器 :import                    // 此特性是为了将变量从 CSS 传递给 JS。CSS Module 通过 Interoperable CSS (ICSS) 实现此特性，ICSS 作为 CSS Modules 的低级文件格式规范，只是在标准 CSS 中额外增加了两个的伪选择器 :import 和 :export。// https://juejin.cn/post/6992428132263264264#heading-5和:export。// https://juejin.cn/post/6992428132263264264#heading-5
                    mode: 'icss',
                },
            },
        },
    },
    devServer: {
        port: 11223,
    },
});
