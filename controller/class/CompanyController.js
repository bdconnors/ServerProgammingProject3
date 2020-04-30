const Controller = require('./Controller');
class CompanyController extends Controller{
    constructor(service) {
        super(service);
    }
    index(req,res){
        const result = this.service.delete(req.query.company);
        console.log(result);
        res.send(result);
    }
}
module.exports = CompanyController;