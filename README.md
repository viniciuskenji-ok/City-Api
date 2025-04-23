# API REST de Gerenciamento de Cidades e Ruas

Uma API RESTful para gerenciamento de cidades e suas respectivas ruas, desenvolvida com Node.js, TypeScript e Express.

## Sobre o Projeto

Este projeto consiste em uma API que permite:
- Cadastrar, listar, editar e excluir cidades
- Cadastrar, listar, editar e excluir ruas associadas a cidades
- Validação de dados usando Yup
- Armazenamento de dados usando SQLite com Knex.js

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Knex.js (Query Builder)
- SQLite (Banco de Dados)
- Yup (Validação de Dados)
- Docker

## Como Executar

### Com Docker

```bash
# Clone o repositório
git clone [url-do-repositório]

# Entre na pasta do projeto
cd api-rest-node-typescript

# Inicie com Docker Compose
docker-compose up
```

### Sem Docker

```bash
# Clone o repositório
git clone [url-do-repositório]

# Entre na pasta do projeto
cd api-rest-node-typescript

# Instale as dependências
yarn install

# Execute as migrações
yarn knex:migrate

# Inicie a aplicação
yarn dev
```

## Endpoints

### Cidades
- `POST /city` - Criar cidade
- `GET /city` - Listar cidades
- `GET /city/:id` - Buscar cidade por ID
- `PUT /city/:id` - Atualizar cidade
- `DELETE /city/:id` - Excluir cidade

### Ruas
- `POST /street` - Criar rua
- `GET /street` - Listar ruas
- `GET /street/:id` - Buscar rua por ID
- `PUT /street/:id` - Atualizar rua
- `DELETE /street/:id` - Excluir rua

## Scripts Disponíveis

- `yarn dev` - Inicia o servidor em modo desenvolvimento
- `yarn test` - Executa os testes
- `yarn knex:migrate` - Executa as migrações
- `yarn knex:rollback` - Reverte a última migração
- `yarn knex:seed` - Popula o banco com dados iniciais

## Estrutura do Projeto

O projeto segue uma arquitetura organizada em controladores, provedores de dados e rotas, facilitando a manutenção e expansão do código.
