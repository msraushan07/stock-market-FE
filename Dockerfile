# Stage 1
FROM node:latest as angular-build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular-build /app/build /usr/share/nginx/html
EXPOSE 7071
CMD ["nginx", "-g", "daemon off;"]
