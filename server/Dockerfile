FROM node:12

WORKDIR /usr/src/app 
COPY package*.json ./

RUN yarn
COPY . .
RUN npx prisma generate

CMD ["yarn", "start:ts-node"]