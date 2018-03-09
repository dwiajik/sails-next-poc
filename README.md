# Sails.js + Next.js: Proof of Concept

A [Sails](http://sailsjs.org) and [Next](https://github.com/zeit/next.js/) application

## Getting started

```
npm install
npm run start
```

OR

```
yarn
yarn start
```

The application will run on port 1337.

## Using docker

### Build docker image

```
docker build -t sails-next-poc .
```

### Run docker image

```
docker run -p 3000:1337 sails-next-poc
```

It will run on port 3000. Backend will be on http://localhost:3000/api/xxx, /api prefix.

Use sudo if you get permission error.