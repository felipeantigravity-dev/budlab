# BUDLAB - Technical Handbook 🚀

Este documento serve como a fonte única de verdade para a equipe de engenharia do projeto **BUDLAB**. Ele foi desenhado para permitir que qualquer novo membro da equipe ("onboarding") entenda a arquitetura, o fluxo de desenvolvimento e os padrões do projeto rapidamente.

---

## 1. Visão Geral do Projeto

**BUDLAB** é uma plataforma de e-commerce focada em streetwear minimalista e cultura urbana. O projeto prioriza:
- **Performance**: Carregamento rápido e interações fluidas.
- **Estética**: Design visual forte (Neon Green/Black/White) utilizando Tailwind CSS.
- **Simplicidade**: Arquitetura frontend-first com serviços backend integrados via Supabase.

---

## 2. Stack Tecnológica

| Camada | Tecnologia | Motivação |
| :--- | :--- | :--- |
| **Frontend** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) | Performance de build exepcional e ecossistema robusto. |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para reduzir bugs e melhorar manutenibilidade. |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Desenvolvimento rápido de UI com design system consistente. |
| **Estado** | [React Query](https://tanstack.com/query) | Gerenciamento de estado de servidor (cache, refetching). |
| **Backend/DB** | [Supabase](https://supabase.com/) | Banco de dados, Auth e APIs instantâneas (PostgreSQL). |
| **UI Kit** | [shadcn/ui](https://ui.shadcn.com/) | Componentes acessíveis e customizáveis. |

---

## 3. Configuração do Ambiente (Onboarding)

Siga estes passos para rodar o projeto localmente em menos de 5 minutos.

### Pré-requisitos
- Node.js (v18+)
- npm ou bun

### Instalação

\`\`\`bash
# 1. Clone o repositório
git clone <URL_DO_REPO>

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (se necessário)
# Copie o .env.example para .env (atualmente não há segredos críticos locais)
# cp .env.example .env

# 4. Inicie o servidor de desenvolvimento
npm run dev
\`\`\`

Acesse **http://localhost:8080** para ver a aplicação.

---

## 4. Arquitetura do Projeto

A estrutura de pastas segue um padrão modular e intuitivo dentro de `src/`:

- **`/assets`**: Imagens estáticas, ícones e fontes.
- **`/components`**:
  - **`/home`**: Componentes específicos da página inicial (Hero, Featured, etc).
  - **`/products`**: Componentes de listagem e cards de produtos.
  - **`/layout`**: Header, Footer e estruturas de página.
  - **`/ui`**: Componentes base do shadcn/ui (Button, Input, Toast).
- **`/data`**: Dados mockados (ex: `mockProducts.ts`) para desenvolvimento local/fallback.
- **`/hooks`**: Custom Hooks (ex: `useProducts.ts` para abstrair chamadas de dados).
- **`/pages`**: Componentes de rota (Views principais).
- **`/lib`**: Utilitários e configurações (ex: cliente Supabase, helpers de classe CSS).

### Fluxo de Dados de Produto

1.  **Fonte**: Os dados vêm primariamente do Supabase, mas temos um fallback local em `src/data/mockProducts.ts`.
2.  **Hook**: O hook `useProducts` (`src/hooks/useProducts.ts`) gerencia a busca.
    - Ele tenta buscar do Supabase.
    - Se falhar ou estiver sem conexão, ele retorna os dados do mock.
    - **Importante**: Atualmente, ele mescla mocks para garantir que a loja tenha conteúdo (30 itens).

---

## 5. Design System & Estilização

Utilizamos Tailwind CSS com uma configuração estendida em `tailwind.config.ts`.

### Cores Principais
- **Primary**: Neon Green (`hsl(142, 76%, 36%)`) - Ações principais, destaques.
- **Background**: White/Black (Dark Mode) - Base limpa.
- **Accent**: Variações de Lime Green.

### Tipografia
- **Títulos**: `Bebas Neue` (Impactante, Uppercase).
- **Corpo**: `Inter` (Legibilidade, UI moderna).

### Padrões de Código CSS
Evite criar classes CSS puras em arquivos `.css` ou `.scss`. Use utilitários do Tailwind diretamente no JSX.
- **Correto**: `<div className="flex items-center justify-between p-4">`
- **Evitar**: `<div className="header-container">`

---

## 6. Padrões de Desenvolvimento

### Commits
Prefira commits semânticos e em inglês/português consistente:
- `feat: adiciona filtro de produtos`
- `fix: corrige alinhamento do header`
- `chore: atualiza dependências`

### Criação de Novos Componentes
1.  Se for um componente reutilizável (botão, modal), coloque em `/components/ui`.
2.  Se for específico de uma funcionalidade, crie uma pasta semântica em `/components` (ex: `/components/cart`).
3.  Sempre exporte o componente como `Named Export` (`export function Component()`).

---

## 7. Scripts Disponíveis

- `npm run dev`: Inicia servidor local.
- `npm run build`: Compila para produção.
- `npm run lint`: Verifica problemas de código (ESLint).
- `npm run preview`: Visualiza o build de produção localmente.

---

> **Dúvidas?** Consulte o Tech Lead ou abra uma Issue no repositório.
