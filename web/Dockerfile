
FROM node:alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn

# Building app
RUN NEXT_PUBLIC_ENVIROMENT_VAR=APP_NEXT_PUBLIC_ENVIROMENT_VAR yarn build

# Permisions to execute script
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
EXPOSE 3000
CMD [ "yarn", "start" ]