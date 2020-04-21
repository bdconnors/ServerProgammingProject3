const Service = require('./Service');
class EmployeeService extends Service{
    constructor(repo){
        super(repo);
    }
}
module.exports = EmployeeService;