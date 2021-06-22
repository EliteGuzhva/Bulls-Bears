#!/bin/sh

. ./.env

docker run \
    --rm -t \
    -p 5000:5000 \
    ${HUB_USER}/${REPO_NAME}:${TAG}
