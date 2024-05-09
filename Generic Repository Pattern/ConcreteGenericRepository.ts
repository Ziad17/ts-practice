import { BaseEntity } from "./Entities/BaseEntity.js";
import { IGenericRepository } from "./IGenericRepository.js";

export class ConcreteGenericRepository<T extends BaseEntity> implements IGenericRepository<T>{

    Add(entity: T): void {
        console.log(`item with id : ${entity.Id} added`);
    }
    Delete(entity: T): void {
        console.log(`item with id : ${entity.Id} deleted`);
    }
    Update(entity: T): void {
        console.log(`item with id : ${entity.Id} updated`);
    }
    Get(id: string): T| null {
      return null;
    }

}