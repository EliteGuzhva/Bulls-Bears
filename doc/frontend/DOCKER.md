# Запуск клиентского приложения через Docker

## Запуск с использованием готового образа
```bash
cd frontend/ci/docker
./run.sh
```
или
```bash
docker run --rm -t -p 3000:3000 elit3guzhva/bulls-bears-frontend:0.0.6
```

## Сборка докер-образа вручную
```bash
cd frontend/ci/docker
./build.sh
```
