FROM node:16.13.2 AS production

WORKDIR /var/www/production

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "./server.js"]
