import { BaseEntity } from "./Entities/BaseEntity"

export interface IGenericRepository<T extends BaseEntity>{
    Add(entity : T):void;

    Delete(entity: T): void;

    Update(entity : T): void;

    Get(id:string): T | null;
}