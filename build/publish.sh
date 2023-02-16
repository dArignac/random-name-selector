#!/bin/sh
[ -d "./output" ] && rm -r ./output/*
mkdir -p ./output/src
cp -r ./assets ./output/
md5_script=$(md5sum src/script.js | awk '{print $1}' | cut -c 1-8)
md5_style=$(md5sum src/style.css | awk '{print $1}' | cut -c 1-8)
build/minify -o ./output/index.html index.html
sed -i "s/script.js/script.${md5_script}.js/" ./output/index.html
sed -i "s/style.css/style.${md5_style}.css/" ./output/index.html
build/minify -o ./output/src/script.${md5_script}.js src/script.js
build/minify -o ./output/src/style.${md5_style}.css src/style.css