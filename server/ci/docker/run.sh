#!/bin/sh

. ./.env

docker run \
    --rm -t \
    --volume `pwd`/../..:/app:rw \
    --workdir=/app \
    -p 5000:5000 \
    ${HUB_USER}/${REPO_NAME}:${TAG} \
    python3 -m src.test
