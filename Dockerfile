
FROM node:lts-alpine

LABEL version="1.0"
LABEL description="Base docker image for the BlogsApp backend API"
LABEL mantainer="luisfnvrr@gmail.com"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "start"]