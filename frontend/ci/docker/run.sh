#!/bin/sh

. ./.env

docker run \
    --rm -it \
    -p 3000:3000 \
    ${HUB_USER}/${REPO_NAME}:${TAG}
