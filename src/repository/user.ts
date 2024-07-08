import { createUser } from "../database/postgress/user";
import { UserEntity } from "../entity/user";
import { CreateUserUseCaseRepositoryInterface } from "../useCase/repository/user";

class CreateUserUserCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(user: UserEntity): Promise<void> {
        await createUser(user)
    }
}

export {
    CreateUserUserCaseRepository
};
