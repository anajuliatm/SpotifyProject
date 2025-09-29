# Imagem base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas arquivos de dependências primeiro (melhora o cache do Docker)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "api/server.js"]
