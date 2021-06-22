#!/bin/sh

. ./.env

docker push ${HUB_USER}/${REPO_NAME}:${TAG}
