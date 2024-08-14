import { createUser, deleteUserById, listUserById, listUsers, loginUser, updateUserById } from "../database/postgres/user";
import { UserEntity } from "../entity/user";
import { CreateUserUseCaseRepositoryInterface, DeleteUsersByIdUseCaseRepositoryInterface, ListUsersByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface, LoginUserUseCaseRepositoryInterface, UpdateUsersByIdUseCaseRepositoryInterface } from "../useCase/repository/user";
import { DeleteUserByIdUseCaseRequest, ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../useCase/ucio/user";

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
    async listUserById(ID: ListUserByIdUseCaseRequest): Promise<UserEntity> {
        return listUserById(ID)
    }
}
class UpdateUserByIdUseCaseRepository implements UpdateUsersByIdUseCaseRepositoryInterface {
    async updateUserById(ID: UpdateUserByIdUseCaseRequest): Promise<UserEntity> {
        return updateUserById(ID)
    }
}
class DeleteUserByIdUseCaseRepository implements DeleteUsersByIdUseCaseRepositoryInterface {
    async deleteUserById(ID: string): Promise<void> {
        await deleteUserById(ID)
    }
}
class LoginUserUseCaseRepository implements LoginUserUseCaseRepositoryInterface {
    async LoginUser(email: string): Promise<UserEntity> {
        return await loginUser(email)
    }
}

export {
    CreateUserUserCaseRepository,
    ListUserByIdUseCaseRepository,
    ListUsersUseCaseRepository,
    UpdateUserByIdUseCaseRepository,
    DeleteUserByIdUseCaseRepository,
    LoginUserUseCaseRepository
};

