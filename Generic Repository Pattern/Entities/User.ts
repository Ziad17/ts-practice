import { BaseEntity } from "./BaseEntity.js";

export class User extends BaseEntity{
    constructor(public Name:string,public PhoneNumber: string)
    {
        super('65565')
    }
}