## DevOps Node App

Aplicação Node.js simples usando Express. Projetada como exemplo para demonstração de deploy/DevOps (Azure/Docker/GitHub).

### Visão geral

Este repositório contém um servidor Express muito simples que responde `Hello DevOps In Azure!` na rota raiz `/`.

### Estrutura

- `index.js` - ponto de entrada do servidor Express.
- `package.json` - dependências e scripts.

### Pré-requisitos

- Node.js (>= 16 recomendado)
- npm (ou yarn)
- Git

### Instalação

1. Clone o repositório (ou baixe o código):

```bash
git clone <URL_DO_REPOSITORIO>
cd DevOps_node_app
```

2. Instale as dependências:

```bash
npm install
```

### Execução (desenvolvimento)

Inicie a aplicação localmente:

```bash
npm start
```

Por padrão o servidor usa a porta `3000`. Para alterar a porta use a variável `PORT`:

```bash
PORT=4000 npm start
```

Em seguida abra `http://localhost:3000/` (ou a porta que escolher) — você deverá ver: `Hello DevOps In Azure!`.

### Execução (produção)

Defina as variáveis de ambiente adequadas e rode o comando:

```bash
NODE_ENV=production PORT=3000 npm start
```

### Empacotamento / "Compilação"

Aplicações Node.js não precisam de compilação tradicional (como em C/C++/Java). Os passos principais são:

1. Instalar dependências: `npm install`.
2. Testar localmente: `npm start` / checar endpoints.
3. (Opcional) Empacotar em um container Docker — exemplo abaixo.

Docker (exemplo de Dockerfile):

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

Build e rodar a imagem Docker:

```bash
docker build -t devops-node-app:latest .
docker run -p 3000:3000 devops-node-app:latest
```

### Teste rápido via curl

```bash
curl -sS http://localhost:3000/
# Deve retornar: Hello DevOps In Azure!
```

### Como subir no GitHub (passo-a-passo)

1. Crie um repositório no GitHub (via site) e copie a URL remota (HTTPS ou SSH).

2. Se ainda não inicializou git localmente, inicialize e faça o primeiro commit:

```bash
git init
git add .
git commit -m "Initial commit"
```

3. Adicione o remoto e envie para o GitHub (substitua `<URL_DO_REPO>`):

```bash
git remote add origin <URL_DO_REPO>
git branch -M main
git push -u origin main
```

Se já existe o repositório local com `.git`, apenas faça:

```bash
git add .
git commit -m "Atualiza README e script start"
git push
```

### Observações e próximas melhorias sugeridas

- Adicionar testes automatizados (ex.: Jest) e um CI (GitHub Actions) para runs automáticos.
- Adicionar um script `dev` com `nodemon` para desenvolvimento iterativo.
- Configurar lint (ESLint) e formatador (Prettier).

### Contato

Se quiser, posso criar também o `Dockerfile` no repositório e configurar um workflow básico do GitHub Actions para build/CI.

---

README gerado automaticamente pelo assistente. Conte-me se quer que eu crie o `Dockerfile` e um workflow de CI.
