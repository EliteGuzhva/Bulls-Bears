# Запуск клиентского приложения через Docker

## Запуск с использованием готового образа
### Заготовленный скрипт
```bash
cd frontend/ci/docker
./run.sh
```

### Docker команда
```bash
docker run --rm -it -p 3000:3000 elit3guzhva/bulls-bears-frontend:0.0.8
```

### Использовать локальный сервер
```bash
docker run --rm -it -p 3000:3000 -e REACT_APP_SERVER_URL=http://127.0.0.1:5000 elit3guzhva/bulls-bears-frontend:0.0.8
```

## Сборка докер-образа вручную
```bash
cd frontend/ci/docker
./build.sh
```
