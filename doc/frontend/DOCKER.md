# Запуск клиентского приложения через Docker

## Запуск с использованием готового образа
### Заготовленный скрипт
```bash
cd frontend/ci/docker
./run.sh
```

### Docker команда
```bash
docker run --rm -t -p 3000:3000 elit3guzhva/bulls-bears-frontend:0.0.6
```

### Использовать сервер на Heroku
```bash
docker run --rm -t -p 3000:3000 -e REACT_APP_SERVER_URL=https://bulls-bears-stonk-apps.herokuapp.com elit3guzhva/bulls-bears-frontend:0.0.6
```

## Сборка докер-образа вручную
```bash
cd frontend/ci/docker
./build.sh
```
