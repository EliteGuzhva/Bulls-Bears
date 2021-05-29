docker run \
    --rm -it \
    --volume `pwd`/../..:/app:rw \
    --workdir=/app \
    -p 5000:5000 \
    elit3guzhva/bulls-bears-server:0.0.2 \
    python3 -m src.test
