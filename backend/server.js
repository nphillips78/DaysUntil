const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes')
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users', {
  useMongoClient: true  
});

const server = express()

server.use(bodyParser.json())
server.use(cors())

routes(server)

server.listen(port, () => {
  console.log('Server listening on port ${port}');
});

module.exports = { server }
