const DataLayer = require('../../lib/companydata');
class Repository {

    constructor(){}

    async all(){
        throw new Error('Please override all function from parent class Repository');
    }
    async create(values){
        throw new Error('Please override create function from parent class Repository');
    }
    async retrieve(values){
        throw new Error('Please override retrieve function from parent class Repository');
    }
    async update(values){
        throw new Error('Please override update function from parent class Repository');
    }
    async delete(values){
        throw new Error('Please override delete function from parent class Repository');
    }
    async connect(company){
        this.data = new DataLayer(company);
    }
    makeMany(items){
        let results = [];
        items.forEach((item)=>{
            results.push(this.make(item));
        });
        return results;
    }
    make(values){
        throw new Error('Please override make function from parent class Repository');
    }

}
module.exports = Repository;