#!/bin/sh

. ./.env

docker run \
    --rm -t \
    -p 5000:5000 \
    -e SECRET_KEY \
    ${HUB_USER}/${REPO_NAME}:${TAG}
