# Stage 1
FROM node:latest as angular-build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build 

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=angular-build /app/dist/stock-market-FE /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
