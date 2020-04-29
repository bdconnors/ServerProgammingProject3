const Service = require('./Service');
class TimecardService extends Service{
    constructor(repo){
        super(repo);
    }
    async getAll(company,empId){
        return await this.repo.all({company:company,empId:empId});
    }
    async get(company,empId,id){
        return await this.repo.retrieve({company:company,empId:empId,id:id});
    }
}
module.exports = TimecardService;