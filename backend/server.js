const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');     //secures express requests
const morgan = require('morgan');     //provides logging for express
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const routes = require('./routes'); //TODO:still need to create endpoints for the entries
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const server = express();

//create a database connection for all the entries (be sure to define the schema)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/entries', {
  useMongoClient: true  
});


server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

//enable logging on HTTP requests
server.use(morgan('combined'));  

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = { server }
