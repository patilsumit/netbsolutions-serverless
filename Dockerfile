FROM node:18.7.0
RUN apt-get update && apt-get install -y \
  nano \
  Vim

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .
RUN npm install --force

RUN npm run build

EXPOSE 3030

USER node