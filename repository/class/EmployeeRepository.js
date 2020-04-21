const Repository = require('./Repository');
class EmployeeRepository extends Repository{
    constructor(data){
        super(data);
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