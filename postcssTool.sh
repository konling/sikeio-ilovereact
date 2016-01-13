#!/bin/bash

#postcss --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

#### 管道写法 #####
#cat css/app.css | postcss --use autoprefixer | postcss --use postcss-import | cat > bundle/app.css
###启动####
make server & make css
#make all
