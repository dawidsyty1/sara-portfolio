FROM node:alpine

RUN apk add python2 make g++

RUN mkdir /app
WORKDIR /app

ADD . /app

RUN npm install && npm run build
