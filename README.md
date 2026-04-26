# 🧊 Backend - Agenda de Serviços de Refrigeração

API desenvolvida para gerenciar os agendamentos do sistema **Agenda de Serviços de Refrigeração**.

---

## 🌐 Backend online

🔗 https://backend-agenda-refrigeracao-fullstack.onrender.com

---

## 🚀 Funcionalidades

- Criar agendamentos
- Listar agendamentos
- Buscar agendamento por ID
- Editar agendamentos
- Excluir agendamentos
- Integração com banco de dados MongoDB

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- Dotenv
- Render

---

## 📁 Estrutura do projeto

```txt
backend/
├── controllers/
├── models/
├── routes/
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## 🔗 Rotas da API

### Listar agendamentos

```http
GET /api/entries
```

### Buscar agendamento por ID

```http
GET /api/entries/:id
```

### Criar agendamento

```http
POST /api/entries
```

Exemplo de envio:

```json
{
  "title": "Laís",
  "description": "Endereço: Rua Exemplo\nTelefone: 81999999999\nServiço: Instalação de ar-condicionado\nObservação: Sem observações",
  "happenedAt": "2026-04-30T08:00:00.000Z"
}
```

### Atualizar agendamento

```http
PUT /api/entries/:id
```

### Excluir agendamento

```http
DELETE /api/entries/:id
```

---

## ⚙️ Variáveis de ambiente

Crie um arquivo `.env` na raiz do backend com:

```env
MONGODB_URI=sua_string_de_conexao_mongodb
PORT=3000
```

⚠️ O arquivo `.env` não deve ser enviado para o GitHub.

---

## ▶️ Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/LNayaraSilva/backend-agenda-refrigeracao-fullstack.git
```

2. Acesse a pasta:

```bash
cd backend-agenda-refrigeracao-fullstack
```

3. Instale as dependências:

```bash
npm install
```

4. Configure o arquivo `.env`

5. Inicie o servidor:

```bash
npm start
```

A API ficará disponível em:

```txt
http://localhost:3000/api/entries
```

---

## 🌍 Deploy

O backend foi publicado no Render:

```txt
https://backend-agenda-refrigeracao-fullstack.onrender.com
```

---

## 🎯 Objetivo do projeto

Este backend foi desenvolvido para complementar o frontend da aplicação de agendamento de serviços de refrigeração, permitindo persistência dos dados em banco de dados e operações CRUD completas.

---

## 👩‍💻 Desenvolvido por

**Laís Nayara**

---

## 📌 Melhorias futuras

- Autenticação de usuários
- Validação avançada dos campos
- Filtros por data e tipo de serviço
- Dashboard com métricas
- Documentação com Swagger
