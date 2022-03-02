#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

tempRemoteName="temp2333333"

git pull &&
git remote add $tempRemoteName $1 &&
git push $tempRemoteName master &&
git remote remove $tempRemoteName &&
cd .. &&
git clone $1
