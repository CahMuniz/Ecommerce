# 🐾 MYPet - Sistema de Gerenciamento de Pets

<div align="center">

![Status](https://img.shields.io/badge/Projeto-Desenvolvimento-green)
![Banco de Dados](https://img.shields.io/badge/Database-Relacional-blue)
![Git](https://img.shields.io/badge/Git-Versionamento-orange)

</div>

---

# 📌 Visão Geral do Projeto

O **MYPet** é um sistema desenvolvido para gerenciamento de informações relacionadas a animais de estimação, permitindo cadastrar, consultar e organizar dados importantes dos pets e seus responsáveis.

A aplicação foi criada com o objetivo de aplicar conceitos de desenvolvimento de sistemas, integração entre interface, lógica de negócio e banco de dados.

O sistema permite centralizar informações que normalmente são armazenadas manualmente, oferecendo uma solução digital organizada, segura e de fácil utilização.

---

# 🎯 Objetivos

O projeto tem como principais objetivos:

- Criar uma plataforma para gerenciamento de animais;
- Aplicar conceitos de CRUD (Create, Read, Update e Delete);
- Trabalhar integração entre aplicação e banco de dados;
- Desenvolver uma estrutura organizada e escalável;
- Aplicar conceitos de modelagem de dados;
- Praticar arquitetura de sistemas.

---

# 🏛️ Arquitetura do Sistema

O projeto segue uma arquitetura dividida em camadas:

```
                 CLIENTE
                    |
                    |
              FRONT-END
                    |
                    |
              BACK-END / API
                    |
                    |
             CAMADA DE DADOS
                    |
                    |
              BANCO DE DADOS
```

## Funcionamento:

1. Usuário acessa a interface do sistema;
2. Realiza uma ação (cadastro, consulta, alteração ou exclusão);
3. Front-end envia uma requisição;
4. Back-end processa a informação;
5. Banco de dados executa a operação;
6. Resultado retorna para o usuário.

---

# 🛠️ Tecnologias Utilizadas

## Front-End

Responsável pela interface gráfica.

Tecnologias:

- HTML5
- CSS3
- JavaScript

Responsabilidades:

- Criar telas;
- Capturar informações do usuário;
- Exibir dados cadastrados;
- Melhorar experiência de navegação.

---

# ⚙️ Back-End

Responsável pelas regras de negócio.

Funções:

- Receber requisições;
- Validar informações;
- Executar operações no banco;
- Retornar respostas para o usuário.

Operações realizadas:

- Inserção de dados;
- Consulta;
- Atualização;
- Exclusão.

---

# 🗄️ Banco de Dados

## Objetivo

O banco de dados é responsável por armazenar todas as informações do sistema de forma estruturada.

O modelo utilizado segue o conceito de:

- Organização por tabelas;
- Chaves primárias;
- Chaves estrangeiras;
- Relacionamentos;
- Integridade dos dados.

---

# 📊 Modelo Entidade Relacionamento

Representação:

```
USUARIO
   |
   |
   | 1:N
   |
   |
PET
   |
   |
   | 1:N
   |
   |
CONSULTA
```

Um usuário pode possuir vários pets.

Um pet pode possuir vários registros de acompanhamento.

---

# 🧱 Estrutura do Banco de Dados

Banco:

```
mypet_database
```

Estrutura:

```
📂 Banco MYPet

├── usuario
│
├── pet
│
├── consulta
│
└── historico_pet
```

---

# 👤 Tabela Usuario

Responsável por armazenar os donos dos animais.

## Estrutura:

| Campo | Tipo | Descrição |
|-|-|-|
| id_usuario | INT | Identificador único |
| nome | VARCHAR | Nome completo |
| email | VARCHAR | Email de acesso |
| telefone | VARCHAR | Contato |
| senha | VARCHAR | Senha criptografada |

---

## SQL:

```sql
CREATE TABLE usuario (

id_usuario INT PRIMARY KEY AUTO_INCREMENT,

nome VARCHAR(100) NOT NULL,

email VARCHAR(100) UNIQUE NOT NULL,

telefone VARCHAR(20),

senha VARCHAR(255) NOT NULL

);
```

---

# 🐶 Tabela Pet

Armazena informações dos animais.

## Estrutura:

| Campo | Tipo | Descrição |
|-|-|-|
| id_pet | INT | Identificador |
| nome | VARCHAR | Nome do animal |
| especie | VARCHAR | Tipo do animal |
| raca | VARCHAR | Raça |
| idade | INT | Idade |
| peso | DECIMAL | Peso |
| id_usuario | INT | Dono responsável |

---

## SQL:

```sql
CREATE TABLE pet (

id_pet INT PRIMARY KEY AUTO_INCREMENT,

nome VARCHAR(100) NOT NULL,

especie VARCHAR(50),

raca VARCHAR(50),

idade INT,

peso DECIMAL(5,2),

id_usuario INT,

FOREIGN KEY(id_usuario)

REFERENCES usuario(id_usuario)

);
```

---

# 🏥 Tabela Consulta

Armazena informações veterinárias.

## Estrutura:

| Campo | Tipo |
|-|-|
| id_consulta | INT |
| data_consulta | DATE |
| descricao | TEXT |
| id_pet | INT |

---

SQL:

```sql
CREATE TABLE consulta(

id_consulta INT PRIMARY KEY AUTO_INCREMENT,

data_consulta DATE,

descricao TEXT,

id_pet INT,

FOREIGN KEY(id_pet)

REFERENCES pet(id_pet)

);
```

---

# 🔗 Relacionamentos

## Usuário → Pets

Relacionamento:

```
Usuario 1 -------- N Pet
```

Um usuário pode cadastrar vários animais.

---

## Pet → Consulta

Relacionamento:

```
Pet 1 -------- N Consulta
```

Um animal pode possuir vários registros.

---

# 📥 Inserindo Dados

Exemplo:

## Cadastro usuário:

```sql
INSERT INTO usuario
(nome,email,telefone,senha)

VALUES

('Ana','ana@email.com','31999999999','123456');
```

---

## Cadastro Pet:

```sql
INSERT INTO pet

(nome,especie,raca,idade,peso,id_usuario)

VALUES

('Thor','Cachorro','Golden','3',30.5,1);
```

---

# 🔎 Consultando Informações

## Listar todos os pets:

```sql
SELECT * FROM pet;
```

---

## Buscar pets de um usuário:

```sql
SELECT 

usuario.nome,

pet.nome

FROM usuario

INNER JOIN pet

ON usuario.id_usuario = pet.id_usuario;
```

---

# ✏️ Atualização de Dados

Exemplo:

```sql
UPDATE pet

SET idade = 4

WHERE id_pet = 1;
```

---

# ❌ Exclusão de Dados

```sql
DELETE FROM pet

WHERE id_pet = 1;
```

---

# 🔐 Boas Práticas no Banco

O projeto utiliza:

✔ Chaves primárias  
✔ Relacionamentos com Foreign Key  
✔ Validação de campos obrigatórios  
✔ Organização normalizada dos dados  
✔ Controle de integridade  

---

# 🚀 Instalação do Projeto

## Pré-requisitos:

Instalar:

- Git
- Node.js
- Banco de Dados utilizado
- Editor de código

---

# Clonar o projeto

```bash
git clone https://github.com/CahMuniz/MYPet.git
```

---

# Acessar pasta

```bash
cd MYPet
```

---

# Configurar Banco de Dados

1. Criar banco:

```sql
CREATE DATABASE mypet_database;
```

2. Executar scripts SQL;

3. Configurar conexão no arquivo:

```
.env
```

Exemplo:

```
DATABASE_HOST=localhost

DATABASE_USER=root

DATABASE_PASSWORD=senha

DATABASE_NAME=mypet_database
```

---

# Executar Aplicação

Instalar dependências:

```bash
npm install
```

Executar:

```bash
npm start
```

ou

```bash
npm run dev
```

---

# 🔄 Controle de Versão

O projeto utiliza Git.

Fluxo:

```
Alteração
   |
git add
   |
git commit
   |
git push
   |
GitHub
```

---

# 📚 Conceitos Aplicados

Durante o desenvolvimento foram aplicados:

- CRUD completo;
- Banco de dados relacional;
- Modelagem ER;
- SQL;
- Integração Front-end e Back-end;
- Arquitetura de software;
- Versionamento Git;
- Organização profissional de projeto.

---

# 🔮 Melhorias Futuras

Possíveis implementações:

- Login com autenticação JWT;
- Controle de usuários;
- Dashboard administrativo;
- Upload de fotos;
- Agendamento veterinário;
- Notificações;
- Aplicativo Mobile;
- Deploy em nuvem.

---

# 👩‍💻 Desenvolvedora

**Ana Carolina Muniz**

🎓 Análise e Desenvolvimento de Sistemas  
💻 Desenvolvimento Full Stack  
🚀 Foco em programação, banco de dados e criação de soluções Web.

---

# 📄 Licença

Projeto desenvolvido para estudos, portfólio e aprimoramento profissional.
