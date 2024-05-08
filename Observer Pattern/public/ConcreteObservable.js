export class ConcreteObservable {
    constructor(resourceName) {
        this.ResourceName = resourceName;
        this.Observers = [];
    }
    Subscribe(observer) {
        this.Observers.push(observer);
        console.log(`${observer.Name} added to subscribe to ${this.ResourceName} changes`);
    }
    UnSubscribe(observer) {
        this.Observers.splice(this.Observers.indexOf(observer), 1);
        console.log(`${observer.Name} removed from ${this.ResourceName} changes`);
    }
    GetObservers() {
        console.log(`Listing Obsersers For Resource ${this.ResourceName} : =>`);
        this.Observers.forEach(element => {
            console.log(`${element.Name}`);
        });
    }
}
