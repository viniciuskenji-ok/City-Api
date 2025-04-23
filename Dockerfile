# node
FROM node:20-alpine

# define o diretorio de trabalho
WORKDIR /app

# copia o package.json e yarn.lock para o container
COPY package.json yarn.lock ./

# yarn
RUN yarn install

# copia da aplicaçao
COPY . .

# compilaçao
RUN yarn build || echo "Nenhum script de build encontrado"

# porta
EXPOSE $PORT

# executa a aplicaçao
CMD ["yarn", "dev"]