import { IObservable } from "./IObservable.js";
import { IObserver } from "./IObserver.js";

export class ConcreteObservable implements IObservable
{
    Observers: IObserver[];
    ResourceName: string;

    constructor(resourceName:string )
    {
        this.ResourceName=resourceName;
        this.Observers=[];
    }

    Subscribe(observer: IObserver): void {
        this.Observers.push(observer);
        console.log(`${observer.Name} added to subscribe to ${this.ResourceName} changes`)
    }

    UnSubscribe(observer: IObserver): void {
        this.Observers.splice(this.Observers.indexOf(observer),1);
        console.log(`${observer.Name} removed from ${this.ResourceName} changes`)
    }

    GetObservers(): void {
        console.log(`Listing Obsersers For Resource ${this.ResourceName} : =>`)
        this.Observers.forEach(element => {
            console.log(`${element.Name}`)
        });
    }
}