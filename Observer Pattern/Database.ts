import { ConcreteObservable } from "./ConcreteObservable.js";

export class Database extends ConcreteObservable{

    SaveChanges(data:any){
        this.Observers.forEach(element => {
            element.Notify(data);
        });
    }

}