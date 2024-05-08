import { ConcreteObservable } from "./ConcreteObservable.js";
import { IObserver } from "./IObserver.js";

export class MessageBus extends ConcreteObservable implements IObserver{
    Name: string;

    constructor()
    {
        super('Message Bus')

        this.Name=this.ResourceName;
    }

    Notify(data: any): void {
        console.log(`==== message bus received info =====`)
        this.Observers.forEach(element => {
            element.Notify(data)
        });
    }
}