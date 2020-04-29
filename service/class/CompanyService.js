const Service = require('./Service');
class CompanyService extends Service{
    constructor(repo){
        super(repo);
    }
    async deleteCompany(values){

    }

}
module.exports = CompanyService;