const prodPlugins = [];

if (['production', 'prod'].includes(process.env.NODE_ENV)) {
    prodPlugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }, 'transform-remove-debugger']);
}

module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        [
            'import',
            {
                libraryName: 'ant-design-vue',
                libraryDirectory: 'es',
                style: 'css',
            },
            'ant-design-vue',
        ],
        [
            'import',
            {
                libraryName: '@ant-design/icons-vue',
                libraryDirectory: '',
                style: false,
                camel2DashComponentName: false,
            },
            '@ant-design/icons-vue',
        ],
        ...prodPlugins,
    ],
};
