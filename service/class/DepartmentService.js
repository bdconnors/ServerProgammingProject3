const Service = require('./Service');
const Department = require('../../lib/companydata/lib/department');
class DepartmentService extends Service{
    constructor(data){
        super(data);
    }
    create(values){
        try {
            const company = values.company;
            const allDepartments = this.data.execute(company, "Department", "getAll", [company]);
            const deptNo = "bdc5435_d_" + (allDepartments.length + 1);
            const department = new Department(company, values.dept_name, deptNo, values.location);
            return this.data.execute(company,"Department","insert",[department]);
        }catch (e) {
            return e;
        }

    }
    retrieveAll(company){
        try {
            const args = [company];
            return this.data.execute(company, "Department", "getAll", args);
        }catch (e) {
            return e;
        }
    }
    retrieve(company,id){
        try {
            const args = [company, id];
            const department = this.data.execute(company, "Department", "get", args);
            if (department) {
                return department;
            } else {
                return {error: `Department ${id} not found`};
            }
        }catch (e) {
            return e;
        }
    }
    update(values){
        try{
            const company = values.company;
            let result = this.retrieve(company,values.dept_id);
            if(result.error){
                return result;
            }else{
                const updates = this.applyUpdates(result,values);
                return this.data.execute(company,"Department","update",[updates]);
            }
        } catch (e) {
            return e;
        }
    }
    delete(company,id){
        try{
            this.data.execute(company,"Department","delete",[company,id]);
            return {success:`Department ${id} was deleted from company ${company}`};
        }catch (e) {
            return e;
        }
    }
}
module.exports = DepartmentService;