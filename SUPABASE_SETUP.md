# Como vincular o Supabase Localmente

Para rodar as migrações automáticas e sincronizar o banco de dados, siga estes passos no seu terminal:

### 1. Login no CLI
Primeiro, autentique-se no Supabase (se ainda não estiver logado):
```bash
npx supabase login
```
> Isso abrirá seu navegador para confirmar o acesso.

### 2. Vincular Projeto
Use o comando abaixo com o ID do seu projeto (**vizbojadbtmxhrycgyjb**):
```bash
npx supabase link --project-ref vizbojadbtmxhrycgyjb
```
> **Atenção:** Será solicitada a **senha do banco de dados** (Database Password) que você definiu ao criar o projeto no Supabase.

### 3. Enviar Migrações
Após vincular, envie as tabelas criadas (como `wishlist_items`) para o banco remoto:
```bash
npx supabase db push
```

---
**Observação para Windows:**
Se tiver erros de permissão (`UnauthorizedAccess`), tente rodar os comandos com `powershell -ExecutionPolicy Bypass -Command "..."` ou ajuste a política de execução do seu PowerShell.
