FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm i

COPY . /app/

EXPOSE 3000

CMD ["npx", "nodemon", "server/index.js"]


