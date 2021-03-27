docker run \
    --rm -it \
    --volume `pwd`/../../src:/app:rw \
    --workdir=/app \
    -p 5000:5000 \
    elit3guzhva/bulls-bears-server:0.0.1 \
    python3 test.py
