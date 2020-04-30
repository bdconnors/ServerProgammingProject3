const DataLayer = require('../../lib/companydata');
class DataAccess {

    constructor(){}

    execute(company,entity,operation,args){
        try {
            this.data = new DataLayer(company);
            const func = operation + entity;
            return this.data[func](...args);
        }catch{
            return {error:`Company ${company} not found`};
        }
    }

}
module.exports = DataAccess;