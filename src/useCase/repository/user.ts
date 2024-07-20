import { UserEntity } from "../../entity/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<void>
}
interface ListUsersUseCaseRepositoryInterface {
    listUsers(): Promise<UserEntity[]>
}
interface ListUsersByIdUseCaseRepositoryInterface {
    listUserById(id: string): Promise<UserEntity>
}

export {
    CreateUserUseCaseRepositoryInterface,
    ListUsersByIdUseCaseRepositoryInterface,
    ListUsersUseCaseRepositoryInterface
}

