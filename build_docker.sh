#!/bin/bash


docker build . -t "dreambrooklabs_homepage"

docker tag dreambrooklabs_homepage dreambrooktech/dreambrooklabs_homepage:v0.1.1

docker push dreambrooktech/dreambrooklabs_homepage:v0.1.1

