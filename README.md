# Documentação da API

Motors Shop é uma API RESTFul desenvolvida em Node.js que possui dois níveis de acesso e permissão (Seller e Client). A aplicação permite criar, atualizar e deletar usuários, criar anúncios, editar e interagir através de comentários.

Este repositório contém o código-fonte e os Endpoints das rotas.

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
    - [Clonando o Projeto](#31-clonando-o-projeto)
    - [Criando o Banco de Dados](#32-criando-o-banco-de-dados)
    - [Configurando as Variáveis](#33-configurando-as-variáveis-de-ambiente)
    - [Realizando as Migrações](#34-realizando-as-migrações)
    - [Rodando a API](#35-rodando-a-api)
- [Estrutura e Documentação da API](#4-estrutura-da-api)
- [Autores](#autores)

## 1. Visão Geral
Visão geral do projeto e tecnologias utilizadas.

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Swagger](https://swagger.io/)

URL base da aplicação: http://localhost:3333

---

## 2. Diagrama ER
Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![Diagrama do projeto com suas relações!](https://github.com/Kenzie-Kars-G-29/Back-End-Workscpace/blob/develop/DER.png)

---

### 3.1. Clonando o Projeto

Clone o projeto em sua máquina e baixe as dependências:

```
npm install
```
### 3.2. Criando o Banco de Dados:

```
psql
CREATE DATABASE nomeDatabase;
```

### 3.3. Configurando as Variáveis:

Crie um arquivo **.env**, copiando o formato do arquivo **.env.example**
Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha. Configure também as variáveis do servidor para envio de emails.

### 3.4. Realizando as migrações:

```
npm run typeorm migration:generate ./src/migrations/CreateTable -- -d ./src/data-source.ts
```
```
npm run typeorm migration:run -- -d src/data-source
```

### 3.5. Rodando a API:

Para rodar a API localmente use o comando:

```
npm run dev
```
## 4. Estrutura e Documentação da API:

É possível acessar a documentação da API é através do link local, quando a API está em execução:

[Motors-Shop-Documentação-local](http://localhost:3333/api-docs/)

Essa documentação descreve os recusos que a API possuí, como Endpoints, exemplos de requisição, exemplos de retorno e metodos de autenticação

## Autores

- [@Eliseu](https://github.com/EliseuAndrade26)
- [@Glayson](https://github.com/Glayson7)
- [@Leticia](https://github.com/leticiamontilha)
- [@Lucas](https://github.com/Dev3lopmentM4chine)
- [@Paola](https://github.com/paolarosa)
