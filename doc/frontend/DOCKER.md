# Запуск клиентского приложения через Docker

## Запуск с использованием готового образа
```bash
cd frontend/ci/docker
./run.sh
```

или

### Unix
```bash
docker run \
    --rm -t \
    -p 3000:3000 \
    elit3guzhva/bulls-bears-frontend:0.0.3
```

### Windows
```bash
docker run --rm -t -p 3000:3000 -e REACT_APP_SERVER_URL="http://127.0.0.1:5000" elit3guzhva/bulls-bears-frontend:0.0.3
```

## Сборка докер-образа вручную
```bash
cd frontend/ci/docker
./build.sh
```
