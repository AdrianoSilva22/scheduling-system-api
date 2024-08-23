import { UserEntity } from "../../entity/user"
import { ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<void>
}
interface ListUsersUseCaseRepositoryInterface {
    listUsers(): Promise<UserEntity[]>
}
interface ListUserByIdUseCaseRepositoryInterface {
    listUserById(ID: ListUserByIdUseCaseRequest): Promise<UserEntity>
}
interface UpdateUserByIdUseCaseRepositoryInterface {
    updateUserById(ID: UpdateUserByIdUseCaseRequest): Promise<UserEntity>
}
interface DeleteUserByIdUseCaseRepositoryInterface {
    deleteUserById(ID: string): Promise<void>
}

export {
    CreateUserUseCaseRepositoryInterface, DeleteUserByIdUseCaseRepositoryInterface, ListUserByIdUseCaseRepositoryInterface,
    ListUsersUseCaseRepositoryInterface, UpdateUserByIdUseCaseRepositoryInterface
}

