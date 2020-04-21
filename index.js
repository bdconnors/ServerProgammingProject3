const dotenv = require('dotenv');
dotenv.config();

const DataLayer = require('./core').DataLayer;
const Server = require('./core').Server;

const dataLayer = new DataLayer(process.env.DATA_USER);
const server = new Server(dataLayer);

server.start();