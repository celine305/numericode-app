# numericode-app
A message decoder

> This is a full stack app with React and Express.

## What is Numericode?
A substitution cipher is an algorithm that maps a letter onto something else - a letter, number or symbol. For example, you may have seen a numeric substitution cipher, where A = 1, B = 2, ..., Y = 25, Z = 26. In this example, HELLO would become 8 5 12 12 15.

Numericode is very similar to the numeric substitution cipher, except that the numbers given can be larger than 26 (the number of letters in the alphabet). If a number is 27 or larger, it needs to be divided by 27 until it is 26 or less. To give an example, 8 5 12 12 15 is still a valid encoding of HELLO, but so is 216 3645 12 324 405 (because it is 8*27 5*27*27 12 12*27 15*27).

If a number is not an integer after being divided by 27, it should be presented as a space. For example, the messageFOO BARcan be encoded as6 15 15 28 2 1 18(because28 / 27is not an integer, it is shown as a space)

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
