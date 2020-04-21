const Service = require('./Service');
class TimecardService extends Service{
    constructor(repo){
        super(repo);
    }
}
module.exports = TimecardService;