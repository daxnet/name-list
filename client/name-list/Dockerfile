FROM nginx:perl AS base
WORKDIR /app
EXPOSE 80

FROM node:10.16.0-alpine AS build
RUN npm install -g @angular/cli@8.0.3
WORKDIR /src
COPY . .
RUN npm install
RUN ng build --prod --output-path /app

FROM base AS final
COPY --from=build /app /usr/share/nginx/html
COPY --from=build /src/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]