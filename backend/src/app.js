const express = require('express');
const server = express();
const routes = require('./routes/index.js');
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;