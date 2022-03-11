FROM node:lts-alpine AS deps

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]

