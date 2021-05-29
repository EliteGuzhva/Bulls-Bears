FROM node:14-alpine
COPY bulls-n-bears/package.json /app/
COPY bulls-n-bears/yarn.lock /app/
WORKDIR /app
RUN yarn install
COPY bulls-n-bears /app

