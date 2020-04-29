const Repository = require('./Repository');
class TimecardRepository extends Repository{
    constructor(){
        super();
    }
    async all(values){
        await this.connect(values.company);
        return await this.data.getAllTimecard(values.empId);
    }
    async retrieve(values){
        await this.connect(values.company);
        return await this.data.getTimecard(values.empId,values.id);
    }
    make(values){
        return this.data.Timecard(values.id,
            values.start,
            values.end,
            values.empId);
    }
}
module.exports = TimecardRepository;