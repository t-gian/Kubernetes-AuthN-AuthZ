FROM node:latest AS build

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install


COPY ./frontend .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
