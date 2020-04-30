class Service{
    constructor(data){
        this.data = data;
    }
    applyUpdates(entity,values){
        delete values.company;
        Object.keys(values).map((key)=>{
            if(entity.hasOwnProperty(key)){
                entity[key] = values[key];
            }
        });
        return entity;
    }
}
module.exports = Service;