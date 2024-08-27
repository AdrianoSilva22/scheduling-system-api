

# Scheduling API

## Descrição

A **Scheduling API** é uma API desenvolvida em Node.js utilizando Express e TypeScript, com foco na criação, gestão e consulta de agendamentos. A aplicação segue o padrão de arquitetura Repository Pattern, garantindo uma organização limpa e escalável do código.

## Funcionalidades

- **Autenticação de Usuários**: Utilização de JWT para autenticação e autorização de usuários.
- **Gestão de Agendamentos**: Criação, listagem, edição e exclusão de agendamentos.
- **Gestão de Usuários**: Criação, edição, exclusão e listagem de usuários com diferentes roles (manager, professional, client).
- **Middleware de Autorização**: Verificação de permissões de acordo com o role do usuário autenticado.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs RESTful.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **JWT**: JSON Web Token para autenticação e autorização de usuários.
- **TypeORM**: ORM (Object-Relational Mapping) para gerenciamento de banco de dados.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`.
-**Entre diversas outras tecnologias**.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/AdrianoSilva22/system-scheduling-api
```

2. Navegue até o diretório do projeto:
    ```bash
    cd Scheduling-api
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto.
    - Adicione as seguintes variáveis:

    ```
    SECRET=your_jwt_secret_key
    DATABASE_URL=your_database_url
    ```

5. Inicie a aplicação:
    ```bash
    npm run dev
    ```