import { UserEntity } from "../../entity/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<void>
}

export {
    CreateUserUseCaseRepositoryInterface
}

