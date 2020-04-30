const Service = require('./Service');
class CompanyService extends Service{
    constructor(data){
        super(data);
    }
    delete(company){
        try{
            const result = this.data.execute(company,"Company","delete",[company]);
            console.log(result);
            return {success:`Company ${company} was deleted`};

        }catch (e) {
            return e;
        }
    }

}
module.exports = CompanyService;