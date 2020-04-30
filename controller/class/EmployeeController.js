const Controller = require('./Controller');
class EmployeeController extends Controller{
    constructor(service) {
        super(service);
    }
    index(req,res){
        const employees = this.service.retrieveAll(req.query.company);
        res.send(employees);
    }
    create(req,res){
        const employee = this.service.create(req.body);
        console.log(employee);
        res.send(employee);
    }
    retrieve(req,res){
        const employee = this.service.retrieve(req.query.company,req.query.emp_id);
        res.send(employee);
    }
    update(req,res){
        const employee = this.service.update(req.body);
        res.send(employee);
    }
    delete(req,res){
        const result = this.service.delete(req.query.company,req.query.emp_id);
        res.send(result);
    }
}
module.exports = EmployeeController;