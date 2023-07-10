#!/usr/bin/env bash
# exit on error
set -o errexit

yarn 
yarn run build
yarn run typeorm migration:run -d ./dist/src/data-source.js
yarn start
