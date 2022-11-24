#!/bin/sh
[ -d "./output" ] && rm -r ./output/*
mkdir -p ./output/src
cp -r ./font ./output/
cp -r ./assets ./output/
build/minify -o ./output/index.html index.html
build/minify -o ./output/src/script.js src/script.js
build/minify -o ./output/src/style.css src/style.css