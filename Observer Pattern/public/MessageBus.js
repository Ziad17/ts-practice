import { ConcreteObservable } from "./ConcreteObservable.js";
export class MessageBus extends ConcreteObservable {
    constructor() {
        super('Message Bus');
        this.Name = this.ResourceName;
    }
    Notify(data) {
        console.log(`==== message bus received info =====`);
        this.Observers.forEach(element => {
            element.Notify(data);
        });
    }
}
