# API - Exercita365

## Descrição
O Exercita365 é uma plataforma que facilita o gerenciamento de exercícios e locais para atividades físicas serem praticadas. Os usuários podem cadastrar novos locais de exercícios, encontrar pontos próximos, visualizar informações sobre os exercícios em cada ponto e registrar suas próprias contribuições para o sistema.

## Requisitos Para Instalação do Projeto

1. **Node.js**: É a plataforma usada para executar o servidor. Certifique-se de instalar a versão recomendada. (18.x ou superior)
2. **npm**: O gerenciador de pacotes para Node.js, necessário para instalar as dependências do projeto. Normalmente é instalado junto com o Node.js. (versão recomendada: 8.x ou superior)
3. **PostgreSQL**: É o sistema de gerenciamento de banco de dados utilizado. Instale a versão compatível com o projeto. (13.x ou superior)

## Instalação

1. Clone o repositório:
  ```bash
  git clone https://github.com/yBtyZa/Exercita365.git
  cd exercita365
  ```
2. Instale as dependências:
  ```bash
  npm install
  ```

## Configurações
1. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
  ```bash
  APP_PORT= // Porta para executar o servidor

  DB_DIALECT=postgres
  DB_HOST= // Host da base de dados
  DB_USER= // Usuário da base de dados
  DB_PASSWORD= // Senha da base de dados
  DB_DATABASE= // Nome da base de dados
  DB_PORT= // Porta da base de dados

  JWT_KEY= // Chave JWT
  ```

## Scripts

- **`npm run start:prod`**: Este comando executa várias etapas importantes no ambiente de produção:
  1. **Criação do Banco de Dados**: Executa `npx sequelize-cli db:create` para criar o banco de dados se ele ainda não existir.
  2. **Migrações do Banco de Dados**: Executa `npx sequelize-cli db:migrate` para aplicar as migrações e estruturar o banco de dados conforme definido nos arquivos de migração.
  3. **Inserção de Dados Iniciais**: Executa `npx sequelize-cli db:seed:all` para popular o banco de dados com dados iniciais definidos nos arquivos de seed.
  4. **Geração da Documentação do Swagger**: Executa `node ./autogen.swagger.js` para gerar a documentação da API usando Swagger.
  5. **Início do Servidor**: Executa `node ./src/index.js` para iniciar o servidor da aplicação.

## Swagger
Acesse a rota `/doc` para acessar a interface do Swagger e utilizar as rotas.

## Cadastro e Login
Efetue o cadastro de um novo usuário com os parâmetros descritos abaixo e realize o login para obter um token de acesso. Utilize esse token no cabeçalho para obter acesso as rotas.

## Rotas

### Usuários

- **Cadastrar Usuário**
  - **URL:** `/usuarios`
  - **Método:** `POST`
  - **Descrição:** Cadastra um novo usuário.
  - **Corpo da Requisição:**
  ```json
  {
  "nome": "STRING",
  "email": "STRING",
  "sexo": "ENUN('Masculino', 'Feminino', 'Outro')",
  "cpf": "STRING",
  "endereco": "STRING",
  "data_nascimento": "DATE",
  "password_hash": "STRING"
  }
  ```
- **Login do Usuário**
  - **URL:** `/login`
  - **Método:** `POST`
  - **Descrição:** Realiza o login do usuário.
  - **Corpo da Requisição:**
  ```json
  {
  "email": "STRING",
  "senha": "STRING"
  }
  ```
### Locais de Exercício

- **Cadastrar Local de Exercício**
  - **URL:** `/locais`
  - **Método:** `POST`
  - **Descrição:** Cadastra um novo local de exercício.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
  - **Corpo da Requisição:**
  ```json
  {
  "nome": "STRING",
  "descricao": "STRING",
  "cep": "STRING",
  "numero": "STRING",
  "atividades_id": [ INTERGER, INTERGER ]
  }
  ```
- **Listar Locais de Exercício**
  - **URL:** `/locais`
  - **Método:** `GET`
  - **Descrição:** Lista todos os locais de exercício cadastrados pelo usuário logado.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
- **Listar Local de Exercício Especifico**
  - **URL:** `/locais/{local_id}`
  - **Método:** `GET`
  - **Descrição:** Listar um local cadastrado pelo usuário logado.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
- **Deletar Local de Exercício**
  - **URL:** `/locais/{local_id}`
  - **Método:** `DELETE`
  - **Descrição:** Deleta um local cadastrado pelo usuário logado.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
- **Atualizar Local de Exercício**
  - **URL:** `/locais/{local_id}`
  - **Método:** `DELETE`
  - **Descrição:** Deletar um local cadastrado pelo usuário logado.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
  - **Corpo da Requisição:**
  ```json
  {
  "nome": "STRING",
  "descricao": "STRING",
  "cep": "STRING",
  "numero": "STRING",
  "atividades_id": [ INTERGER, INTERGER ]
  }
  ```
- **Listar link do Google Maps de um Local de Exercício Especifico**
  - **URL:** `/locais/{local_id}/maps`
  - **Método:** `GET`
  - **Descrição:** Listar link do google maps de um local de exercício cadastrados pelo usuário logado.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
### Atividades (Somente usuários administradores tem acesso.)
#### Usuário administrador:
Efetue o login com esses dados.
  ```json
  {
  "email": "admin@example.com",
  "password_hash": "password123"
  }
  ```

- **Cadastrar Uma nova Atividade**
  - **URL:** `/atividades`
  - **Método:** `POST`
  - **Descrição:** Cadastrar uma nova categoria de atividade de exercicios.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
  - **Corpo da Requisição:**
  ```json
  {
  "categoria": "STRING"
  }
  ```
- **Deletar Uma Atividade**
  - **URL:** `/atividades/{atividade_id}`
  - **Método:** `DELETE`
  - **Descrição:** Deletar uma categoria de atividade de exercicios.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
### Permissões (Somente usuários administradores tem acesso.)
#### Usuário administrador:
Efetue o login com esses dados.
  ```json
  {
  "email": "admin@example.com",
  "password_hash": "password123"
  }
  ```

- **Cadastrar Uma Nova Permissão**
  - **URL:** `/permissoes`
  - **Método:** `POST`
  - **Descrição:** Cadastrar uma nova permissão de acesso.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
  - **Corpo da Requisição:**
  ```json
  {
  "nome": "STRING"
  }
  ```
- **Atribuir Uma Nova Permissão**
  - **URL:** `/permissoes/atribuir-permissoes`
  - **Método:** `POST`
  - **Descrição:** Atribuir uma nova permissão a um usuário.
  - **Cabeçalho da requisição:**
  ```json
  {
  authorization: Bearer <token>
  }
  ```
  - **Corpo da Requisição:**
  ```json
  {
  "usuario_id": INTERGER,
  "permissao_id": INTERGER
  }
  ```
## Tecnologias

<div align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=black&style=for-the-badge" height="40" alt="sequelize logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge" height="40" alt="postgresql logo"  />
</div>

###

## Redes Sociais

<div align="left">
  <a href="https://www.linkedin.com/in/gbetsa/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>
  <a href="https://www.instagram.com/_gbetsa/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo" />
  </a>
</div>

###
