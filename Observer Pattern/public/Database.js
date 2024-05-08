import { ConcreteObservable } from "./ConcreteObservable.js";
export class Database extends ConcreteObservable {
    SaveChanges(data) {
        this.Observers.forEach(element => {
            element.Notify(data);
        });
    }
}
