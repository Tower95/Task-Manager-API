FROM node:lts-alpine

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install && npm install -g prisma

# on aucens of sonthing better. 
RUN chmod -R 777 /home/node/app/node_modules/prisma 

RUN chmod -R 777 /home/node/app/node_modules/.prisma

COPY ./ ./

CMD [ "node", "./bin/www" ]
