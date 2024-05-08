import { IObserver } from "./IObserver.js"

export interface IObservable{
    Subscribe(observer: IObserver) : void

    UnSubscribe(observer: IObserver) : void

    GetObservers():void

    Observers : IObserver[]

    ResourceName: string
}
