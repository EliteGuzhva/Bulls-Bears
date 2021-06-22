#!/bin/sh

. ./.env

docker run \
    --rm -t \
    -p $PORT:$PORT \
    ${HUB_USER}/${REPO_NAME}:${TAG}
