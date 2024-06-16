# 🛒 API de Catálogo de Produtos

## 📄 Descrição

Esta é uma API RESTful para gerenciar um catálogo de produtos, permitindo operações CRUD (Create, Read, Update, Delete) em produtos e categorias. A API foi desenvolvida utilizando Node.js, Express, Sequelize, dotenv e MySQL.

## ✨ Funcionalidades

- **Produtos**
  - 🆕 Criar um novo produto
  - 📋 Listar todos os produtos
  - 🔍 Obter detalhes de um produto específico
  - ✏️ Atualizar um produto existente
  - 🗑️ Deletar um produto

- **Categorias**
  - 🆕 Criar uma nova categoria
  - 📋 Listar todas as categorias
  - 🔍 Obter detalhes de uma categoria específica
  - ✏️ Atualizar uma categoria existente
  - 🗑️ Deletar uma categoria

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- dotenv

## ⚙️ Configuração do Ambiente

### 📋 Pré-requisitos

- Node.js instalado
- MySQL instalado e em execução

### 🚀 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/api-catalogo-produtos.git
    cd api-catalogo-produtos
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```env
    DB_HOST=localhost
    DB_USER=seu-usuario
    DB_PASS=sua-senha
    DB_NAME=nome-do-banco
    PORT=3000
    ```

4. Configure o banco de dados:

    Execute as migrações do Sequelize para criar as tabelas no banco de dados:

    ```bash
    npx sequelize db:migrate
    ```

### ▶️ Executando a API

1. Inicie o servidor:

    ```bash
    node server.js
    ```

2. A API estará disponível em `http://localhost:3000`.

## 🔗 Endpoints

### Produtos

- `GET /products` - Listar todos os produtos
- `POST /products` - Criar um novo produto
- `GET /products/:id` - Obter detalhes de um produto específico
- `PUT /products/:id` - Atualizar um produto existente
- `DELETE /products/:id` - Deletar um produto

### Categorias

- `GET /categories` - Listar todas as categorias
- `POST /categories` - Criar uma nova categoria
- `GET /categories/:id` - Obter detalhes de uma categoria específica
- `PUT /categories/:id` - Atualizar uma categoria existente
- `DELETE /categories/:id` - Deletar uma categoria

## 📂 Estrutura do Projeto

- `controllers/` - Contém os controladores para as rotas da API
- `models/` - Contém os modelos do Sequelize e a configuração do banco de dados
- `routes/` - Contém as definições de rotas
- `migrations/` - Contém as migrações do banco de dados
- `server.js` - Arquivo principal do servidor

## 📝 Licença

Este projeto está licenciado sob a MIT License.
