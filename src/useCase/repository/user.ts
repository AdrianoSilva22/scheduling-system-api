import { UserEntity } from "../../entity/user"
import { ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<void>
}
interface ListUsersUseCaseRepositoryInterface {
    listUsers(): Promise<UserEntity[]>
}
interface ListUsersByIdUseCaseRepositoryInterface {
    listUserById(ID: ListUserByIdUseCaseRequest): Promise<UserEntity>
}
interface UpdateUsersByIdUseCaseRepositoryInterface {
    updateUserById(ID: UpdateUserByIdUseCaseRequest): Promise<UserEntity>
}
interface DeleteUsersByIdUseCaseRepositoryInterface {
    deleteUserById(ID: string): Promise<void>
}

export {
    CreateUserUseCaseRepositoryInterface, DeleteUsersByIdUseCaseRepositoryInterface, ListUsersByIdUseCaseRepositoryInterface,
    ListUsersUseCaseRepositoryInterface, UpdateUsersByIdUseCaseRepositoryInterface
}

