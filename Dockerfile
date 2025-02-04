FROM node:16


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 8833


CMD ["node", "index.js"]