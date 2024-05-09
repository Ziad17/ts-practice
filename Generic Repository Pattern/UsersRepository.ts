import { ConcreteGenericRepository } from "./ConcreteGenericRepository.js";
import { User } from "./Entities/User.js";

export class UsersRepository extends ConcreteGenericRepository<User>
{
    Add(entity: User): void {
        console.log(`method override => item with id : ${entity.Id} added`);
    }

    GetUserByEmail(email : string): User | null{
        console.log(`specific method implmentation, no user found`);
         return null;
        }
}