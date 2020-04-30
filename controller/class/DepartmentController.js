const Controller = require('./Controller');
class DepartmentController extends Controller{
    constructor(service) {
        super(service);
    }
    index(req,res){
        const departments = this.service.retrieveAll(req.query.company);
        res.send(departments);
    }
    create(req,res){
        const department = this.service.create(req.body);
        console.log(department);
        res.send(department);
    }
    retrieve(req,res){
        const department = this.service.retrieve(req.query.company,req.query.dept_id);
        console.log(department);
        res.send(department);

    }
    update(req,res){
        const result = this.service.update(req.body);
        res.send(result);
    }
    delete(req,res){
        const result = this.service.delete(req.query.company,req.query.dept_id);
        res.send(result);
    }
}
module.exports = DepartmentController;