# Etapa 1 - Build da aplicação
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do código
COPY . .

# Expõe a porta (igual a que você usa no .env)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
