import { createUser, getAllUsers } from "../database/postgress/user";
import { UserEntity } from "../entity/user";
import { CreateUserUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface } from "../useCase/repository/user";

class CreateUserUserCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(user: UserEntity): Promise<void> {
        await createUser(user)
    }

}
class ListUsersUseCaseRepository implements ListUsersUseCaseRepositoryInterface {
    async getAllUsers(): Promise<UserEntity[]> {
        return await getAllUsers()
    }

}

export {
    CreateUserUserCaseRepository,
    ListUsersUseCaseRepository
};

