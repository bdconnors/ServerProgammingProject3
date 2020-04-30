//3rd party dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('../../config/routes');
const ctrl = require('../../controller');
const svc = require('../../service');
const DataAccess = require('./DataAccess');

class Server {
    constructor(){
        this.instance = express();
        this.router = express.Router();
        this.svc = [];
        this.ctrl = [];
    }
    /**
     * Starts the server, listening on the host and port specified in the .env file
     * **/
    start(){
        this.applyMiddleWare();
        this.initRoutes();
        this.instance.listen(process.env.SERVER_PORT,()=>{
            console.log(`Server started on port ${process.env.SERVER_PORT}.`);
            console.log(`Navigate to http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }
    initRoutes(){
        routes.forEach((route)=>{
            const service = new svc[route.service](new DataAccess());
            this.svc.push(svc);
            const controller = new ctrl[route.controller](service);
            this.ctrl.push(controller);
            this.setRoutes(controller,route.paths);
        });
    }
    setRoutes(controller,routes){
        routes.forEach((route)=>{
            this.router[route.method](route.path,controller[route.endpoint].bind(controller));
        });
    }
    applyMiddleWare(){
        this.instance.use(cookieParser());
        this.instance.use(express.urlencoded({extended: false}));
        this.instance.use(bodyParser.json());
        this.instance.use(this.router);
    }

}
module.exports = Server;