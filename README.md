# BUDLAB - Technical Handbook 🚀

Este documento serve como a fonte única de verdade para a equipe de engenharia do projeto **BUDLAB**. Ele foi desenhado para permitir que tanto desenvolvedores experientes quanto novos membros ("onboarding") entendam a arquitetura, o fluxo de desenvolvimento e os padrões do projeto rapidamente, além de oferecer uma visão clara do produto para stakeholders.

---

## 1. Identidade do Projeto (O que é o BUDLAB?)

**BUDLAB** é uma plataforma de e-commerce moderna e arrojada, focada em **streetwear minimalista** e cultura urbana. O projeto encarna o slogan *"dichavando arte pelas ruas"*, trazendo uma estética visual forte e uma experiência de usuário fluida.

### Proposta de Valor
-   **Estética Urbana:** Design inspirado nas ruas com paleta de cores Neon Green/Black/White.
-   **Experiência Premium:** Foco em micro-interações, carregamento rápido e design responsivo.
-   **Simplicidade:** Uma jornada de compra direta e sem atritos.

---

## 2. Principais Funcionalidades (Features)

A aplicação oferece um fluxo completo de e-commerce:

-   **Catalogo de Produtos:**
    -   Visualização em grade (Grid) com cards interativos.
    -   Página de detalhes de produto (PDP) com imagens em alta qualidade e informações detalhadas.
-   **Carrinho de Compras:**
    -   Adição rápida de produtos.
    -   Gerenciamento de quantidade e remoção de itens.
    -   Cálculo automático de subtotais.
-   **Autenticação:**
    -   Sistema seguro de Login e Registro alimentado pelo **Supabase Auth**.
-   **Newsletter:**
    -   Modal de captura de leads com integração (mock/real).
-   **Design Responsivo:**
    -   Layout totalmente adaptado para Desktop, Tablet e Mobile.

---

## 3. Stack Tecnológica

Utilizamos uma stack moderna focada em performance, escalabilidade e experiência de desenvolvimento.

| Camada | Tecnologia | Motivação |
| :--- | :--- | :--- |
| **Frontend** | [React 18](https://react.dev/) | Biblioteca padrão da indústria para UIs interativas. |
| **Build Tool** | [Vite](https://vitejs.dev/) | Compilação extremamente rápida e HMR (Hot Module Replacement) instantâneo. |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Segurança de tipos para reduzir bugs e melhorar a documentação de código. |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária para desenvolvimento rápido e consistente. |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) | Componentes acessíveis, bonitos e customizáveis baseados no Radix UI. |
| **Gerenciamento de Estado** | [React Query](https://tanstack.com/query) | Gerenciamento robusto de estado assíncrono (servidor). |
| **Gerenciamento de Estado** | [Context API](https://react.dev/reference/react/createContext) | Gerenciamento leve de estado global da aplicação (ex: Carrinho). |
| **Backend (BaaS)** | [Supabase](https://supabase.com/) | Banco de dados PostgreSQL, Autenticação e APIs em tempo real. |
| **Validação** | [Zod](https://zod.dev/) | Validação de schemas TypeScript-first. |
| **Formulários** | [React Hook Form](https://react-hook-form.com/) | Gerenciamento de formulários performático e flexível. |

---

## 4. Arquitetura e Estrutura

A estrutura de pastas em `src/` segue um padrão modular que facilita a manutenção e escalabilidade:

```
src/
├── assets/        # Recursos estáticos (imagens, fontes, ícones)
├── components/    # Componentes React
│   ├── home/      # Específicos da Home (Hero, Featured)
│   ├── layout/    # Estruturais (Header, Footer, LayoutWrapper)
│   ├── products/  # Relacionados a Produtos (Cards, Grids)
│   └── ui/        # Componentes base reutilizáveis (Button, Input - shadcn)
├── contexts/      # Contextos globais do React (CartContext, etc.)
├── data/          # Dados estáticos/mockados (fallback local)
├── hooks/         # Custom Hooks (retirada de lógica dos componentes)
│   └── useProducts.ts # Ex: Abstração de busca de dados
├── lib/           # Configurações de bibliotecas (utils, supabaseClient)
├── pages/         # Componentes de Rota (Views principais)
└── integrations/  # Integrações externas (se houver)
```

### Padrões de Design
-   **Frontend-First:** A aplicação é construída para funcionar com mocks (`src/data`) caso o backend esteja indisponível, garantindo que o desenvolvimento de UI nunca pare.
-   **Container/Presentational:** Separação (via Hooks) entre a lógica de busca de dados e a apresentação visual.

---

## 5. Design System

Nosso visual é governado por regras estritas para manter a consistência da marca "BUDLAB". Para detalhes completos, consulte o arquivo `budlab-design-system.md`.

-   **Cores Primárias:**
    -   🟢 **Neon Green:** (`#00B050` / `hsl(142, 76%, 36%)`) - Ações principais e destaques.
    -   ⚫ **Black:** (`#000000`) - Elegância e contraste.
    -   ⚪ **White:** (`#FFFFFF`) - Espaço negativo e clareza.

-   **Tipografia:**
    -   **Títulos:** `Bebas Neue` - Alto impacto, caixa alta (Uppercase).
    -   **Corpo:** `Inter` - Legibilidade moderna e limpa.

-   **Estilo:** Minimalista, Angular (sem bordas arredondadas nos botões), Alto Contraste.

---

## 6. Guia de Desenvolvimento (Começando)

Siga estes passos para rodar o projeto localmente em menos de 5 minutos.

### Pré-requisitos
-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) ou [bun](https://bun.sh/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPO>
    cd budlab-main
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    bun install
    ```

3.  **Configuração de Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto baseado no exemplo (se houver) ou adicione as chaves do Supabase:
    ```env
    VITE_SUPABASE_URL=sua_url_supabase
    VITE_SUPABASE_ANON_KEY=sua_chave_anonima
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse:** Abra [http://localhost:8080](http://localhost:8080) no seu navegador.

---

## 7. Scripts NPM Disponíveis

No terminal, você pode rodar os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local com HMR. |
| `npm run build` | Compila o projeto para produção na pasta `dist/`. |
| `npm run build:dev` | Compila o projeto em modo de desenvolvimento (útil para debug). |
| `npm run preview` | Visualiza localmente a versão compilada de produção. |
| `npm run lint` | Executa o ESLint para encontrar e corrigir problemas no código. |
| `npm run test` | Executa os testes unitários via Vitest. |

---

> **Dúvidas?**
> Entre em contato com o Tech Lead ou abra uma Issue no repositório para reportar bugs ou sugerir melhorias.
