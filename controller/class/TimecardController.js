const Controller = require('./Controller');
class TimecardController extends Controller{
    constructor(service) {
        super(service);
    }
    index(req,res){
        const timecards = this.service.retrieveAll(req.query.company,req.query.emp_id);
        res.send(timecards);
    }
    create(req,res){
        console.log(req.body);
        const timeCard = this.service.create(req.body);
        res.send(timeCard);
    }
    retrieve(req,res){
        const timecard = this.service.retrieve(req.query.company,req.query.emp_id,req.query.timecard_id);
        res.send(timecard);

    }
    update(req,res){
        const timeCard = this.service.update(req.body);
        res.send(timeCard);
    }
    delete(req,res){
        const result = this.service.delete(req.query.company,req.query.timecard_id);
        res.send(result);
    }
}
module.exports = TimecardController;