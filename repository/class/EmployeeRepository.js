const Repository = require('./Repository');
class EmployeeRepository extends Repository{
    constructor(){
        super();
    }
    async all(values){
        await this.connect(values.company);
        return await this.data.getAllEmployee(values.company);
    }
    async retrieve(values){
        await this.connect(values.company);
        return await this.data.getEmployee(values.id);
    }
    make(values){
        return this.data.Employee(values.id,
            values.name,
            values.number,
            values.hired,
            values.job,
            values.salary,
            values.depId,
            values.mngId);
    }
}
module.exports = EmployeeRepository;