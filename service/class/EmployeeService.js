const Service = require('./Service');
class EmployeeService extends Service{
    constructor(repo){
        super(repo);
    }
    async getAll(company){
        return await this.repo.all({company:company});
    }
    async get(company,id){
        return await this.repo.retrieve({company:company,id:id});
    }
}
module.exports = EmployeeService;