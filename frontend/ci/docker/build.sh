#!/bin/sh

. .env

cd ../..
docker build -t ${HUB_USER}/${REPO_NAME}:${TAG} -f ci/docker/Dockerfile .
