const dotenv = require('dotenv');
dotenv.config();

const Server = require('./core').Server;

const server = new Server();

server.start();