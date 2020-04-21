const Repository = require('./Repository');
class TimecardRepository extends Repository{
    constructor(data){
        super(data);
    }
    make(values){
        return this.data.Timecard(values.id,
            values.start,
            values.end,
            values.empId);
    }
}
module.exports = TimecardRepository;