//3rd party dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('../../config/routes');
const ctrl = require('../../controller');
const svc = require('../../service');
const repo = require('../../repository');

class Server {
    constructor(dataLayer){
        this.dataLayer = dataLayer;
        this.instance = express();
        this.router = express.Router();
        this.repo = [];
        this.svc = [];
        this.ctrl = [];
    }
    /**
     * Starts the server, listening on the host and port specified in the .env file
     * **/
    start(){
        this.applyMiddleWare();
        this.init();
        this.instance.listen(process.env.SERVER_PORT,()=>{
            console.log(`Server started on port ${process.env.SERVER_PORT}.`);
            console.log(`Navigate to http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }
    init(){
        this.initRepositories();
        this.initServices();
        this.initControllers();
    }
    initRepositories(){
        const departmentRepo = new repo.DepartmentRepository(this.dataLayer);
        this.register("repo","DEPARTMENT",departmentRepo);

    }
    initServices(){
        const departmentService = new svc.DepartmentService(this.repo["DEPARTMENT"]);
        this.register("svc","DEPARTMENT",departmentService);
    }
    initControllers(){
        const departmentController = new ctrl.DepartmentController(this.svc["DEPARTMENT"]);
        this.register("ctrl","DEPARTMENT",departmentController);
    }
    register(type,label,component) {
        if(type === "ctrl"){
            this.setRoutes(component,routes[label]);
        }
        this[type][label] = component;
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