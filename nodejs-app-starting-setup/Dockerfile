FROM node

WORKDIR /appl

COPY package.json /appl

RUN npm install

COPY . /appl

EXPOSE 80

CMD ["node","server.js"]

