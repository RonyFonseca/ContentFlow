# 📌 ContentFlow

**ContentFlow** é um sistema web de planejamento e análise de conteúdo para redes sociais. A aplicação permite que social medias, criadores e pequenos negócios organizem suas postagens, mantenham consistência e tomem decisões estratégicas com base em dados.

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Cadastro de usuários  
- Login seguro  
- Proteção de rotas  

---

### 📅 Planejamento de Conteúdo
- Visualização em calendário (mensal/semanal)  
- Criação de planejamento por período  
- Organização visual das postagens  

---

### 📝 Gestão de Posts
- Adicionar post com:
  - Título  
  - Tipo (Reels, Carrossel, Story…)  
  - Categoria (Venda, Educativo, Engajamento)  
  - Legenda  
  - Data  
  - Status  

- Editar post  
- Excluir post  

---

### 🔄 Controle de Status
- Planejado  
- Em produção  
- Postado  

---

### 🔍 Filtros
- Filtrar por:
  - Tipo de conteúdo  
  - Categoria  
  - Status  
  - Data  

---

### 📊 Dashboard Avançado
- Visão geral do planejamento  
- Total de posts  
- Posts por status  

#### 📈 Gráficos:
- Distribuição por tipo de conteúdo  
- Distribuição por formato de post  
- Evolução de postagens ao longo do tempo  

---

## 🎯 Objetivo

Facilitar o planejamento estratégico de conteúdo para redes sociais, permitindo que o usuário organize, visualize e analise suas postagens de forma simples e eficiente.

---

## 🧠 Público-alvo

- Social medias  
- Pequenos empreendedores  
- Criadores de conteúdo  
- Estudantes de marketing digital  

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- Next.js  
- React  
- CSS 

### Backend
- Node.js  
- API REST  

### Autenticação
- JWT (JSON Web Token)  

### Banco de Dados
- PostgreSQL  

---

## 🧩 Design e Experiência 

O design da aplicação foi prototipado no Figma, com foco em usabilidade, organização visual e fluxo intuitivo. 

**✦ Projeto completo (Figma Design):** [Figma Design](https://www.figma.com/design/Q7mCjCD4lsEHdAO4eLQ9xd/ContentFlow?node-id=28-4&t=KHQn2BYSuI6nqQoD-1) 

**✦ Protótipo interativo (simulação de uso):** [Protótipo interativo](https://www.figma.com/proto/Q7mCjCD4lsEHdAO4eLQ9xd/ContentFlow?node-id=28-4&t=KHQn2BYSuI6nqQoD-1) 

### Principais telas: 

- Login 
- Cadastro 
- Home 
- Calendário de planejamento 
- Criação de Posts 
- Dashboard

---

## 🖥️ Arquitetura

- **Frontend (Next.js)**  
  Interface do usuário e renderização das páginas  

- **Backend (Node.js)**  
  Gerenciamento de usuários e posts (CRUD)  

- **Comunicação**
  - API REST (HTTP)

---

## 📁 Estrutura do Projeto

```bash
contentflow/
│
├── docs/
│   ├── casos-de-uso/
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── styles/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
│
└── README.md
```

---

## ⚙️ Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/contentflow.git
