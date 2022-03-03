#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

tempRemoteName="temp2333333"
gitUrl=$1
urlArray=(${gitUrl//// })
urlArrayLastIndex=$((${#urlArray[@]}-1))
lastString=${urlArray[urlArrayLastIndex]}
lastStringArray=(${lastString//./ })
dirName=${lastStringArray[0]}

git pull &&
git remote add $tempRemoteName $gitUrl &&
git push $tempRemoteName master &&
git remote remove $tempRemoteName &&
cd .. &&
git clone $1 &&
cd $dirName &&
start . &&
code . &&
yarn &&
echo "恭喜你，创建成功"
