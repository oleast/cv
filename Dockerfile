FROM node:9

WORKDIR /srv/www

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
