# numericode-app
A message decoder

> This is a full stack app with React and Express.

## Installation

Requirements:

1. NodeJS 10.13.0 or better
2. Yarn 1.12.3 or better

### Quick start

``` bash
# Install dependencies for server
yarn install

# Install dependencies for client
yarn run client-install

# build webpack
yarn run build

# Run the client & server with concurrently
yarn run dev

# Run the Express server only
yarn run server

# Run the React client only
yarn run client

# Run tests
yarn test

# Server runs on http://localhost:5000 and client on http://localhost:8080
```

### GET /decoder/:numericode

For example, send request http://localhost:5000/decoder/8%205%20324%208748%20295245

> response: "hello"
