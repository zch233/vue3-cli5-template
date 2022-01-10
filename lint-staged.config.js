module.exports = {
    '*.{js,jsx,vue,tsx}': 'vue-cli-service lint',
    '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
    '*.{scss,less,styl,css,vue}': ['stylelint --fix'],
};
