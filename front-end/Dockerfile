# Etapa 1: Construir a aplicação Angular
# Usar a imagem Node.js versão 20.12.2 como base
FROM node:20.12.2 AS build

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de dependência (package.json e package-lock.json) para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação para o contêiner
COPY . .

# Executar o build da aplicação para o ambiente de produção
RUN npm run build --prod

# Etapa 2: Servir a aplicação com NGINX
# Usar uma imagem leve do NGINX para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos de build da aplicação Angular para o diretório padrão do NGINX
COPY --from=build /app/dist/front-end/browser /usr/share/nginx/html

# Expor a porta 80 para permitir o tráfego HTTP
EXPOSE 80

# Iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
