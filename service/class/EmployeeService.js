const Service = require('./Service');
const Employee = require('../../lib/companydata/lib/employee');

class EmployeeService extends Service{
    constructor(data){
        super(data);
    }
    create(values){
        try{
            const company = values.company;
            const departmentExists = this.data.execute(company,"Department","get",[company,values.dept_id]);
            console.log(departmentExists);
            if(departmentExists){
                let managerId;
                if(values.mng_id) {
                    const managerExists = this.data.execute(company, "Employee", "get", [values.mng_id]);
                    if(managerExists){
                        managerId = managerExists.emp_id;
                    }else{
                        return {error:`Manager Id ${values.mng_id} was not found to be a valid employee`};
                    }
                }else{
                    managerId = 0;
                }
                const validHireDate = this.validHireDate(values.hire_date);
                console.log(validHireDate);
                if(validHireDate){
                    const allEmployees = this.data.execute(company,"Employee","getAll",[company]);
                    const empNo = "bdc5435_e"+(allEmployees.length+1);
                    const employee = new Employee(values.emp_name,
                        empNo,values.hire_date,
                        values.job,values.salary,
                        values.dept_id,
                        managerId);
                    const result = this.data.execute(company,"Employee","insert",[employee]);
                    console.log(result);
                    return result;
                }else{
                    return {error:`Hire date ${values.hire_date} is invalid. Must not be a future date, or occur on the weekend`}
                }

            }else{
                return {error:`Department ${values.dept_id} not found`}
            }

        }catch (e) {
            return e;
        }
    }
    retrieveAll(company){
        try {
            const args = [company];
            return this.data.execute(company, "Employee", "getAll", args);
        }catch (e) {
            return e;
        }
    }
    retrieve(company,id){
        try {
            const args = [id];
            const employee = this.data.execute(company, "Employee", "get", args);
            if(employee){
                return employee
            }else{
                return {error:`Employee ${id} not found`};
            }
        }catch (e) {
            return e;
        }
    }
    update(values){
        try{
            const company = values.company;
            let result = this.retrieve(company,values.emp_id);
            if(result.error){
                return result;
            }else{
                const updates = this.applyUpdates(result,values);
                return this.data.execute(company,"Employee","update",[updates]);
            }
        } catch (e) {
            return e;
        }
    }
    delete(company,id){
        try{
            this.data.execute(company,"Employee","delete",[company,id]);
            return {success:`Employee ${id} was deleted`};
        }catch (e) {
            return e;
        }
    }
    validHireDate(dateString){
        const currentDate = new Date();
        const hireDate = new Date(Date.parse(dateString));
        const currentDateOrEarlier = hireDate <= currentDate;
        const weekdayHire = hireDate.getDay() !== 0 && hireDate.getDay() !== 6;
        return currentDateOrEarlier && weekdayHire;
    }
}
module.exports = EmployeeService;