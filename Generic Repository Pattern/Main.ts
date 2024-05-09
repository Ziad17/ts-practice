import { User } from "./Entities/User.js";
import { UsersRepository } from "./UsersRepository.js";
import "./GenericRepositoryExtensions.js";

//custom repo
const sepecifiedUsersRepo=new UsersRepository();

var entity=new User('Alex','+82666245622');
sepecifiedUsersRepo.GetUserByEmail('mail');
sepecifiedUsersRepo.Add(entity);
sepecifiedUsersRepo.Delete(entity)


console.log(`extension method => the count is ${sepecifiedUsersRepo.Count()}`)