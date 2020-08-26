FROM node:12

WORKDIR /usr/src/app 
ENV NODE_ENV production
COPY package*.json ./

RUN yarn
COPY . .
RUN npx prisma generate

CMD ["yarn", "start:build"]