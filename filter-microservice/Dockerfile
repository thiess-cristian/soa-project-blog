FROM node:12

WORKDIR /app    

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3006

EXPOSE 3006

CMD [ "npm","start" ]