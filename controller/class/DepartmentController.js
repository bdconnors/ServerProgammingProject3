const Controller = require('./Controller');
class DepartmentController extends Controller{
    constructor(service) {
        super(service);
    }
    async index(req,res){
        const departments = await this.service.getAll(req.query.company);
        res.send(departments);
    }
    create(req,res){


    }
    async retrieve(req,res){
        const department = await this.service.get(req.query.company,req.query.dept_id);
        console.log(department);
        res.send(department);

    }
    update(req,res){

    }
    delete(req,res){

    }
}
module.exports = DepartmentController;