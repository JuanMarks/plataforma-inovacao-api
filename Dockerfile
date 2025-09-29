# --- ESTÁGIO 1: Builder ---
# Este estágio instala todas as dependências (incluindo as de desenvolvimento),
# compila o código TypeScript para JavaScript e gera o Prisma Client.
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala TODAS as dependências
RUN npm install

# Copia todo o código-fonte da aplicação
COPY . .

# Gera o Prisma Client com base no seu schema
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# --- ESTÁGIO 2: Produção ---
# Este estágio cria a imagem final, que é muito mais leve, contendo apenas
# o necessário para executar a aplicação em produção.
FROM node:20-alpine AS production

# Argumento para o Node.js não guardar pacotes em cache
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

# Instala APENAS as dependências de produção
RUN npm install --omit=dev

# Copia o código já compilado e o Prisma Client do estágio 'builder'
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/prisma ./prisma

# Expõe a porta que a API NestJS usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]