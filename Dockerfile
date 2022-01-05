FROM node:14-slim 
COPY . /app
WORKDIR /app
RUN npm i 
EXPOSE 3000
ENTRYPOINT ["npm", "start"]