
# Plano: Substituir Logo do Footer pela Nova Imagem

## Resumo

Trocar a logo em texto "BUDLAB." no rodapé do site pela nova imagem oficial da marca (budlab-tipografia-branca.png) que contém o logotipo "BUDLAB" com o slogan "dichavando arte pelas ruas".

---

## Escopo de Impacto

A alteração será feita em **um único arquivo** (`Footer.tsx`), mas afetará automaticamente todas as páginas que usam o componente `Layout`:

- Home (`/`)
- Produtos (`/produtos`)
- Produto Individual (`/produto/:id`)
- Sobre (`/sobre`)
- Carrinho (`/carrinho`)
- Login (`/login`)

---

## Passos de Execução

### Passo 1: Copiar a Imagem para o Projeto

Copiar a imagem `budlab-tipografia-branca.png` da pasta de uploads para `src/assets/` para que possa ser importada como módulo ES6.

**Destino:** `src/assets/budlab-tipografia-branca.png`

---

### Passo 2: Atualizar o Componente Footer

Editar `src/components/layout/Footer.tsx`:

1. Adicionar import da nova imagem no topo do arquivo
2. Substituir o texto "BUDLAB." (linhas 11-15) por uma tag `<img>` com a nova logo

**Alteração específica:**

```text
De (texto atual):
  <span className="font-display text-3xl tracking-wider">
    BUDLAB<span className="text-primary">.</span>
  </span>

Para (nova imagem):
  <img 
    src={budlabLogo} 
    alt="BUDLAB - dichavando arte pelas ruas" 
    className="h-16 w-auto"
  />
```

---

## Detalhes Técnicos

- **Import ES6**: A imagem será importada como módulo para melhor bundling e otimização
- **Altura da logo**: Definida como `h-16` (64px) para manter proporção visual adequada no footer
- **Alt text**: Incluirá o slogan "dichavando arte pelas ruas" para acessibilidade
- **Largura automática**: `w-auto` mantém a proporção original da imagem

---

## Arquivos Modificados

| Arquivo | Ação |
|---------|------|
| `src/assets/budlab-tipografia-branca.png` | Criar (copiar) |
| `src/components/layout/Footer.tsx` | Editar |

---

## Resultado Esperado

Após a execução, todas as páginas do site exibirão a nova logo oficial da BUDLAB com o slogan "dichavando arte pelas ruas" no rodapé, substituindo o texto estilizado atual.
