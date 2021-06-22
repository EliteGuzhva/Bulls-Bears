#!/bin/sh

. ./.env

cd ../..
docker build \
    --build-arg server_url=${REACT_APP_SERVER_URL} \
    -t ${HUB_USER}/${REPO_NAME}:${TAG} \
    .
