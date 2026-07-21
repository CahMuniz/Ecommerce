# 🛒 Ecommerce - Plataforma de Comércio Eletrônico

<div align="center">

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
![Projeto](https://img.shields.io/badge/Tipo-Ecommerce-orange)
![Git](https://img.shields.io/badge/Versionamento-Git-red)

</div>

---

# 📌 Sobre o Projeto

O **Ecommerce** é uma aplicação Web desenvolvida com o objetivo de simular uma plataforma completa de vendas online, permitindo o gerenciamento de produtos, usuários, pedidos e operações relacionadas ao comércio eletrônico.

O projeto foi desenvolvido aplicando conceitos fundamentais da Engenharia de Software, incluindo:

- Arquitetura de sistemas;
- Desenvolvimento Front-end;
- Desenvolvimento Back-end;
- Modelagem de banco de dados;
- Operações CRUD;
- Organização de código;
- Controle de versão utilizando Git.

A aplicação busca representar o funcionamento de uma loja virtual real, permitindo que usuários possam visualizar produtos, gerenciar compras e acompanhar informações relacionadas aos pedidos.

---

# 🎯 Objetivos do Sistema

O projeto possui como objetivos:

- Criar uma plataforma de vendas online;
- Permitir gerenciamento de produtos;
- Armazenar informações dos clientes;
- Controlar pedidos realizados;
- Integrar aplicação com banco de dados;
- Aplicar boas práticas de desenvolvimento.

---

# 🏗️ Arquitetura do Sistema

A aplicação segue uma arquitetura dividida em camadas:

```
                 USUÁRIO

                    ↓

              FRONT-END

                    ↓

             API / BACK-END

                    ↓

          CAMADA DE NEGÓCIO

                    ↓

            BANCO DE DADOS

```

---

# 🔄 Fluxo da Aplicação

Funcionamento:

```
Cliente acessa sistema

        ↓

Visualiza produtos

        ↓

Seleciona produtos

        ↓

Adiciona ao carrinho

        ↓

Realiza pedido

        ↓

Sistema valida informações

        ↓

Dados armazenados no Banco

        ↓

Pedido confirmado

```

---

# 💻 Tecnologias Utilizadas

## Front-End

Responsável pela interface visual da aplicação.

Tecnologias utilizadas:

- HTML5
- CSS3
- JavaScript

Responsabilidades:

- Criação das páginas;
- Exibição dos produtos;
- Interação com usuário;
- Organização visual;
- Responsividade.

---

# ⚙️ Back-End

Responsável pela lógica da aplicação.

Funções:

- Gerenciamento das regras de negócio;
- Comunicação com banco de dados;
- Controle das requisições;
- Validação dos dados;
- Processamento dos pedidos.

---

# 🗄️ Banco de Dados

## Objetivo

O banco de dados é responsável por armazenar todas as informações importantes do sistema.

As informações são organizadas utilizando:

- Tabelas;
- Chaves primárias;
- Chaves estrangeiras;
- Relacionamentos;
- Integridade referencial.

---

# 📊 Modelo Entidade Relacionamento

Modelo conceitual:

```

USUÁRIO

 1

 |

 |

 N

PEDIDO

 |

 |

 N

ITEM_PEDIDO

 |

 |

 1

PRODUTO


```

---

# 🧱 Estrutura do Banco de Dados

Banco:

```
ecommerce_database
```

Estrutura:

```
📂 Banco Ecommerce

├── usuarios

├── produtos

├── categorias

├── pedidos

├── itens_pedido

└── pagamentos

```

---

# 👤 Tabela Usuários

Responsável pelos clientes cadastrados.

## Campos:

| Campo | Tipo | Descrição |
|-|-|-|
| id_usuario | INT | Identificador |
| nome | VARCHAR | Nome cliente |
| email | VARCHAR | Email |
| senha | VARCHAR | Senha |
| telefone | VARCHAR | Contato |

---

SQL:

```sql
CREATE TABLE usuarios (

id_usuario INT PRIMARY KEY AUTO_INCREMENT,

nome VARCHAR(100),

email VARCHAR(100) UNIQUE,

senha VARCHAR(255),

telefone VARCHAR(20)

);

```

---

# 📦 Tabela Produtos

Armazena os produtos disponíveis na loja.

Campos:

| Campo | Tipo |
|-|-|
| id_produto | INT |
| nome | VARCHAR |
| descricao | TEXT |
| preco | DECIMAL |
| estoque | INT |
| imagem | VARCHAR |

---

SQL:

```sql
CREATE TABLE produtos(

id_produto INT PRIMARY KEY AUTO_INCREMENT,

nome VARCHAR(100),

descricao TEXT,

preco DECIMAL(10,2),

estoque INT,

imagem VARCHAR(255)

);

```

---

# 🏷️ Tabela Categorias

Organiza os produtos.

Exemplo:

- Eletrônicos;
- Informática;
- Roupas;
- Acessórios.

Estrutura:

| Campo | Tipo |
|-|-|
| id_categoria | INT |
| nome | VARCHAR |

---

SQL:

```sql
CREATE TABLE categorias(

id_categoria INT PRIMARY KEY AUTO_INCREMENT,

nome VARCHAR(100)

);

```

---

# 🛒 Tabela Pedidos

Responsável pelo controle das compras.

Campos:

| Campo | Tipo |
|-|-|
| id_pedido | INT |
| data | DATE |
| status | VARCHAR |
| valor_total | DECIMAL |
| id_usuario | INT |

---

SQL:

```sql
CREATE TABLE pedidos(

id_pedido INT PRIMARY KEY AUTO_INCREMENT,

data_pedido DATE,

status VARCHAR(50),

valor_total DECIMAL(10,2),

id_usuario INT,

FOREIGN KEY(id_usuario)

REFERENCES usuarios(id_usuario)

);

```

---

# 📋 Tabela Item Pedido

Relaciona produtos aos pedidos.

Campos:

| Campo | Tipo |
|-|-|
| id_item | INT |
| quantidade | INT |
| valor | DECIMAL |
| id_pedido | INT |
| id_produto | INT |

---

SQL:

```sql
CREATE TABLE itens_pedido(

id_item INT PRIMARY KEY AUTO_INCREMENT,

quantidade INT,

valor DECIMAL(10,2),

id_pedido INT,

id_produto INT,


FOREIGN KEY(id_pedido)

REFERENCES pedidos(id_pedido),


FOREIGN KEY(id_produto)

REFERENCES produtos(id_produto)

);

```

---

# 🔗 Relacionamentos

## Usuário e Pedido

```
Usuário 1 ---- N Pedido

```

Um usuário pode realizar vários pedidos.

---

## Pedido e Produto

```
Pedido N ---- N Produto

```

Um pedido pode possuir vários produtos.

---

# 📥 Operações CRUD

O sistema trabalha com:

## Create

Cadastro de:

- Usuários;
- Produtos;
- Pedidos.

---

## Read

Consulta:

- Lista de produtos;
- Dados dos clientes;
- Histórico de pedidos.

---

## Update

Atualização:

- Produtos;
- Estoque;
- Dados pessoais.

---

## Delete

Remoção:

- Produtos;
- Registros cadastrados.

---

# 🔎 Consultas SQL

## Listar produtos:

```sql
SELECT * FROM produtos;

```

---

## Buscar pedidos de usuário:

```sql
SELECT *

FROM pedidos

WHERE id_usuario = 1;

```

---

## Produtos vendidos:

```sql
SELECT 

produto.nome,

item.quantidade

FROM produtos produto

INNER JOIN itens_pedido item

ON produto.id_produto = item.id_produto;

```

---

# 🔐 Segurança

Boas práticas aplicadas:

✔ Validação de dados;

✔ Controle de acesso;

✔ Proteção de informações;

✔ Organização das permissões;

✔ Separação Front-end e Back-end.

---

# 🚀 Instalação do Projeto

## Requisitos

Instalar:

- Git
- Node.js
- Banco de dados utilizado
- Editor de código

---

# Clonar o projeto

```bash
git clone https://github.com/CahMuniz/Ecommerce.git

```

---

# Instalar dependências

```bash
npm install

```

---

# Configuração Banco de Dados

Criar banco:

```sql
CREATE DATABASE ecommerce_database;

```

Executar scripts SQL.

Configurar arquivo:

```
.env
```

Exemplo:

```
DATABASE_HOST=localhost

DATABASE_USER=root

DATABASE_PASSWORD=senha

DATABASE_NAME=ecommerce_database

```

---

# Executar aplicação

```bash
npm start

```

ou

```bash
npm run dev

```

---

# 📁 Organização do Projeto

Exemplo:

```
Ecommerce

│

├── src

│

├── components

│

├── pages

│

├── services

│

├── database

│

├── assets

│

└── README.md

```

---

# 🔧 Versionamento Git

Principais comandos:

Adicionar alterações:

```bash
git add .

```

Criar commit:

```bash
git commit -m "Atualização Ecommerce"

```

Enviar:

```bash
git push origin main

```

---

# 🔮 Melhorias Futuras

Possíveis evoluções:

- Sistema de login;
- Autenticação JWT;
- Painel administrativo;
- Integração pagamento online;
- Controle avançado de estoque;
- Dashboard de vendas;
- Deploy em nuvem;
- Aplicativo mobile.

---

# 📚 Conhecimentos Aplicados

Durante o desenvolvimento foram aplicados:

✅ Desenvolvimento Web  
✅ Banco de Dados Relacional  
✅ SQL  
✅ CRUD  
✅ Modelagem de Dados  
✅ Arquitetura de Software  
✅ Git/GitHub  
✅ Responsividade  

---

# 👩‍💻 Desenvolvedora

## Ana Carolina Muniz

🎓 Análise e Desenvolvimento de Sistemas

💻 Desenvolvimento Full Stack

🚀 Foco em criação de aplicações Web, Banco de Dados e soluções digitais.

---

# 📄 Licença

Projeto desenvolvido para estudos, aprendizado e composição de portfólio profissional **CahMuniz**.
