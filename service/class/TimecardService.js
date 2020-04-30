const Service = require('./Service');
const Timecard = require('../../lib/companydata/lib/timecard');
class TimecardService extends Service{
    constructor(data){
        super(data);
    }
    create(values){
        const company = values.company;
        const empId = values.emp_id;
        console.log(empId);
        if(this.validTime(values.end_time,values.start_time)){
            if(this.nonDuplicateCard(company,empId,values.start_time)){
                const timeCard = new Timecard(values.start_time,values.end_time,values.emp_id);
                return this.data.execute(company,"Timecard","insert",[timeCard]);
            }else{
                return {error:"Timecard has a duplicate record for this date"};
            }
        }else{
            return {error:`Timecard has an invalid start or end time`};
        }
    }
    retrieveAll(company,empId){
        try {
            const args = [empId];
            return this.data.execute(company, "Timecard", "getAll", args);
        }catch (e) {
            return e;
        }
    }
    retrieve(company,empId,id){
        try {
            const args = [empId, id];
            const timeCard = this.data.execute(company, "Timecard", "get", args);
            if(timeCard){
                return timeCard;
            }else{
                return {error:`Timecard ${id} not found`};
            }
        }catch (e) {
            return e;
        }
    }
    update(values){
        try{
            const company = values.company;
            let result = this.retrieve(company,values.timecard_id);
            if(result.error){
                return result;
            }else{
                const updates = this.applyUpdates(result,values);
                console.log(updates);
                return this.data.execute(company,"Timecard","update",[updates]);
            }
        } catch (e) {
            return e;
        }
    }
    delete(company,id){
        try{
            this.data.execute(company,"Timecard","delete",[id]);
            return {success:`Timecard ${id} was deleted`};
        }catch (e) {
            return e;
        }
    }
    validStartTime(startTimeString){
        const currentDate = new Date();
        const startDate = new Date(Date.parse(startTimeString));
        const monday = new Date();
        monday.setDate(1);
        const isWeekday = startDate.getDay() !== 0 && startDate.getDay() !== 6;
        const validStart = startDate.getTime() >= monday.getTime() && startDate.getTime() <= currentDate.getTime();
        return isWeekday && validStart;
    }
    validEndTime(endTimeString,startTimeString){
        const endDate = new Date(Date.parse(endTimeString));
        const startDate = new Date(Date.parse(startTimeString));
        const hourFromStart = new Date(Date.parse(startTimeString));
        hourFromStart.setTime(hourFromStart.getHours() + 1);
        const sameDay = endDate.getDay() === startDate.getDay();
        const hourMore = endDate.getTime() >= hourFromStart.getTime();
        return sameDay && hourMore;
    }
    validTime(endTimeString,startTimeString){
        return this.validStartTime(startTimeString) && this.validEndTime(endTimeString,startTimeString);
    }
    nonDuplicateCard(company,empId,startTime){
        let duplicate = true;
        const startDate = new Date(Date.parse(startTime));
        const allTimeCards = this.data.execute(company,"Timecard","getAll",[empId]);
        allTimeCards.forEach((timeCard)=>{
            const stTime = new Date(Date.parse(timeCard.start_time));
            if(stTime.getDate() === startDate.getDate()){
                duplicate = false;
            }
        });
        return duplicate;
    }
}
module.exports = TimecardService;