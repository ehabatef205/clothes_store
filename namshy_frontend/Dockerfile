FROM node:14.19.3

WORKDIR /React_Clothes

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]