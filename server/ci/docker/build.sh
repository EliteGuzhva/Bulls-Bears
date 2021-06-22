#!/bin/sh

. ./.env

cd ../..
docker build \
    --build-arg secret_key=${SECRET_KEY} \
    -t ${HUB_USER}/${REPO_NAME}:${TAG} \
    .
