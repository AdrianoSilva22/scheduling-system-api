import { UserEntity } from "../../entity/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<void>
}
interface ListUsersUseCaseRepositoryInterface {
    getAllUsers(): Promise<UserEntity[]>
}
export {
    CreateUserUseCaseRepositoryInterface,
    ListUsersUseCaseRepositoryInterface
}

