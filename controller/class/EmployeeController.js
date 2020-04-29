const Controller = require('./Controller');
class EmployeeController extends Controller{
    constructor(service) {
        super(service);
    }
    async index(req,res){
        const employees = await this.service.getAll(req.query.company);
        res.send(employees);
    }
    create(req,res){


    }
    async retrieve(req,res){
        console.log(req.query);
        const employee = await this.service.get(req.query.company,req.query.emp_id);
        res.send(employee);
    }
    update(req,res){

    }
    delete(req,res){

    }
}
module.exports = EmployeeController;