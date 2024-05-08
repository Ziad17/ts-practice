import { ConcreteObserver } from "./ConcreteObserver.js"

export class UserInterface extends ConcreteObserver
{
    constructor(){
        super('User Interface')
    }

    Notify(data: any): void {
            console.log(`the page reloaded with the following data ${data}`)
    }
}