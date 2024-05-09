import { BaseEntity } from "./Entities/BaseEntity.js";
import { UsersRepository } from "./UsersRepository.js";

declare module "./UsersRepository"
{
    interface UsersRepository  {
        Count(): number;
    }
}
UsersRepository.prototype.Count = function(): number {
    return Math.floor(Math.random() * (100 - 1)) + 1;
};