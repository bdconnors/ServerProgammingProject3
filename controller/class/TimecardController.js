const Controller = require('./Controller');
class TimecardController extends Controller{
    constructor(service) {
        super(service);
    }
    async index(req,res){
        const timecards = await this.service.getAll(req.query.company,req.query.emp_id);
        res.send(timecards);
    }
    create(req,res){


    }
    async retrieve(req,res){
        const timecard = await this.service.get(req.query.company,req.query.emp_id,req.query.timecard_id);
        res.send(timecard);

    }
    update(req,res){

    }
    delete(req,res){

    }
}
module.exports = TimecardController;