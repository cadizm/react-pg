FROM node:12.18.3-alpine3.9

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["./node_modules/serve/bin/serve.js", "-s", "build" ]
