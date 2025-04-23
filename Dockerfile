FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build || echo "Nenhum script de build encontrado"

EXPOSE $PORT

CMD ["yarn", "dev"]