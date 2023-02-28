#!/usr/bin/env sh

yarn eslint -c ./.eslintrc.js ./src --fix --ignore-pattern \"./package.json\"