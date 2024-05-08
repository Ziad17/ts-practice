import { IObserver } from "./IObserver.js";

export class  ConcreteObserver implements IObserver{
    Name: string;

    constructor(name:string)
    {
        this.Name=name;
    }

    Notify(data: any): void {
        console.log(`==== ${this.Name} received info =====`)
    }
}