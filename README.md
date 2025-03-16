# Trim.ly - Encurtador de URLs

Trim.ly é um encurtador de URLs moderno e escalável, desenvolvido com **Nuxt.js**, **Tailwind CSS** e **PostgreSQL**. O sistema tem um backend desacoplado para garantir maior flexibilidade e escalabilidade.

## Tecnologias Utilizadas

- **Frontend:** Nuxt.js + Tailwind CSS
- **Backend:** Node.js + Express (ou outra tecnologia de sua escolha)
- **Banco de Dados:** PostgreSQL
- **Autenticação:** Supabase Auth (opcional)
- **Hospedagem:** Vercel (Frontend) e Railway/Render/Fly.io (Backend)

## Funcionalidades

- Criar URLs encurtadas personalizadas
- Redirecionamento rápido e eficiente
- Estatísticas básicas de acesso (número de cliques, origem, etc.)
- Autenticação para gerenciar links (opcional)
- API para integração com outras aplicações

## Como Rodar o Projeto

### Backend

1. Clone o repositório e instale as dependências:
   ```sh
   git clone https://github.com/seu-usuario/trimly.git
   cd trimly/backend
   npm install
