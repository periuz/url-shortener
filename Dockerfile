FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./api/package*.json ./

RUN npm install

COPY ./api ./

EXPOSE 3000

CMD ["npm", "start"]
