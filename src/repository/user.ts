import { createUser, listUserById, listUsers } from "../database/postgres/user";
import { UserEntity } from "../entity/user";
import { CreateUserUseCaseRepositoryInterface, ListUsersByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface } from "../useCase/repository/user";

class CreateUserUserCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(user: UserEntity): Promise<void> {
        await createUser(user)
    }

}
class ListUsersUseCaseRepository implements ListUsersUseCaseRepositoryInterface {
    async listUsers(): Promise<UserEntity[]> {
        return await listUsers()
    }

}
class ListUserByIdUseCaseRepository implements ListUsersByIdUseCaseRepositoryInterface {
    async listUserById(id: string): Promise<UserEntity> {
        return listUserById(id)
    }
}

export {
    CreateUserUserCaseRepository,
    ListUserByIdUseCaseRepository,
    ListUsersUseCaseRepository
};

