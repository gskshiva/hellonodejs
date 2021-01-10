FROM node:12.16.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .
EXPOSE 3000

CMD [ "node", "server.js" ]