import { ConcreteObserver } from "./ConcreteObserver.js";

export class SmsBroker extends ConcreteObserver
{
    constructor(){
        super('Sms Broker')
    }

    Notify(data: any): void {
        super.Notify(data);

        // additional behaviour

        if(!(typeof data === 'string'))
        {
            console.log(`${this.Name} couldn't handle the data sent, it's must be a string value`)
        }
    }
}