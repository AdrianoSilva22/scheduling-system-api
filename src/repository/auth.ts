import { authUser } from "../database/postgres/auth";
import { UserEntity } from "../entity/user";
import { AuthUseCaseRepositoryInterface } from "../useCase/repository/auth";

class AuthUseCaseRepository implements AuthUseCaseRepositoryInterface {
    async authUser(email: string): Promise<UserEntity> {
        return await authUser(email)
    }
}

export {
    AuthUseCaseRepository
}