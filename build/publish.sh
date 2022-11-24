#!/bin/sh
[ -d "./output" ] && rm ./output/*
mkdir -p ./output
build/minify -o ./output/index.html index.html