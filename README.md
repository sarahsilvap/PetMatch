# 🐶 Sistema de Adoção de Pets

Este projeto é uma plataforma de adoção de pets desenvolvida com **Vue.js** no frontend e **Node.js + MongoDB** no backend. O sistema permite que instituições cadastrem animais disponíveis para adoção e que usuários interessados visualizem, filtrem e adotem os pets.

---

## 🚀 Funcionalidades

### 🧑‍💻 Usuário
- Visualizar lista de pets disponíveis
- Filtrar por espécie, porte ou status
- Solicitar adoção

### 🏢 Instituição (Admin)
- Login e cadastro seguros
- Adicionar, editar e excluir pets
- Gerenciar status de adoção (disponível / adotado)

---

## 🛠️ Tecnologias Utilizadas

### Frontend (Vue.js)
- Vue 3 + Vite
- Vue Router
- Axios
- PrimeVue + PrimeFlex (UI)

### Backend (Node.js)
- Express.js
- MongoDB + Mongoose
- JWT para autenticação
- dotenv

---

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

### 2. Instale as dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

Abra um novo terminal e execute:

```bash
cd frontend
npm install
```

---

### 3. Configuração do Ambiente

Na pasta `backend`, crie um arquivo `.env` com as variáveis:

```env
PORT=5000
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nomedobanco
JWT_SECRET=sua_chave_secreta
```

> **Importante:** Nunca envie o arquivo `.env` para o GitHub.

---

### 4. Como rodar o projeto

Execute em dois terminais diferentes:

#### Backend

```bash
cd backend
npm run dev
```

O backend rodará em `http://localhost:5000`

#### Frontend

```bash
cd frontend
npm run dev
```

O frontend rodará em `http://localhost:5173` (ou outra porta disponível)

---
