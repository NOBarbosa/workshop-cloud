FROM node:14-slim AS appbuild
WORKDIR /usr/app
COPY package.json ./
RUN yarn install
COPY ./src ./src
COPY ./public ./public
RUN yarn build
# Build Stage 2
# This build takes the production build from staging build
FROM nginx:alpine
COPY --from=appbuild /usr/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]