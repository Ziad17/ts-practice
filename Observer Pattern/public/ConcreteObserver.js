export class ConcreteObserver {
    constructor(name) {
        this.Name = name;
    }
    Notify(data) {
        console.log(`==== ${this.Name} received info =====`);
    }
}
