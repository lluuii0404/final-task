FROM node:10

WORKDIR /server

COPY package*.json ./
RUN npm install -qy

COPY . .

EXPOSE 1337
CMD ["/server/node_modules/.bin/nodemon", "server.js"]
