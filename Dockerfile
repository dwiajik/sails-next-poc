FROM node:8-alpine

WORKDIR /app
COPY . $WORKDIR

EXPOSE 1337

CMD ["npm", "start"]
