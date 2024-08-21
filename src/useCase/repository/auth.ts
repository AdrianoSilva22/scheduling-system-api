import { UserEntity } from "../../entity/user";

interface AuthUseCaseRepositoryInterface {
    authUser(email: string): Promise<UserEntity>
}

export {
    AuthUseCaseRepositoryInterface
}