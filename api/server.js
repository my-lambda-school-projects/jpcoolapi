/*
// public stuff
// module.exports = {
//   greet,
//   secret: 'shhhhh'
// };

// function greet() {
//   console.log('\nserver.js\n');
// }

// private stuff
*/
const express = require('express');
const server = express();

// middleware
const configureMiddleware = require('../config/middleware.js');
const doubler = require('../common/doublerMiddleware.js');
configureMiddleware(server);

// routes (be aware order matters here too...)
const productsRouter = require('../products/productRouter.js');
const clientsRouter = require('../clients/clientsRouter.js');
const ordersRouter = require('../orders/ordersRouter.js');

server.use('/products', productsRouter);
server.use('/clients', clientsRouter);
server.use('/orders', ordersRouter);

// http://localhost:5000
server.get('/', (req, res) => {
  res.send(`sanity check success`);
});

// http://localhost:5000/double?number=4
// http://localhost:5000/double (returns error)
server.get('/double', doubler, (req, res) => {
  res.send(`the value is ${req.query.number} and the double is ${req.double}`);
  // use post:
  // res.send(`the value is ${req.body.number} and the double is ${req.double}`);
});

// http://localhost:5000/1
server.get('/:id', (req, res) => {
  res.send(`sanity check success, id: ${req.params.id}`);
});

module.exports = server;
