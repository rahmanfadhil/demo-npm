// const lodash = require("lodash");
//
// const R = require("ramda")
// let randomText = "ThIs iS RanDom TExt";
//
// randomText = lodash.toLower(randomText)
//
// console.log(randomText);

const http = require('http')
require('pretty-error').start();

const server = http.createServer((request, response) => {
  console.log(request.url)
  response.end("Hello World!")
})

const HOST = "localhost"
const PORT = 8000

server.listen(PORT, HOST, err => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${HOST}:${PORT}`)
  }
})
