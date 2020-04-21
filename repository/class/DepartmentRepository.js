const Repository = require('./Repository');
class DepartmentRepository extends Repository{
    constructor(data){
        super(data);
    }
    async all(values){
        return await this.data.getAllDepartment(values.company);
    }
    async retrieve(values){
       const company = values.company;
       const id = values.id;
       return await this.data.getDepartment(company,id);
    }
    make(values){
        return this.data.Department(values.id,
            values.company,
            values.name,
            values.number,
            values.location);
    }
}
module.exports = DepartmentRepository;