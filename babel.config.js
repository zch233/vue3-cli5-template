const plugins = [
    [
        'import',
        {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true,
        },
    ],
];

if (['production', 'prod'].includes(process.env.NODE_ENV)) {
    plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }, 'transform-remove-debugger']);
}

module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins,
};
