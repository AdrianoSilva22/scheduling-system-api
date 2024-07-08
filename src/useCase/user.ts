import { UserEntity } from "../entity/user";
import { generateUUID } from "../utils/uuid";
import { CreateUserUseCaseRepositoryInterface } from "./repository/user";
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse } from "./ucio/user";
import { CreateUserUseCaseValidateInterface } from "./validate/user";

class CreateUserUseCase {
    validate: CreateUserUseCaseValidateInterface
    repository: CreateUserUseCaseRepositoryInterface

    constructor(
        validate: CreateUserUseCaseValidateInterface,
        respository: CreateUserUseCaseRepositoryInterface
    ) {
        this.validate = validate
        this.repository = respository
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateDriver(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new CreateUserUseCaseResponse(errorMessage)
            }

            const { name, email, phone, password } = req

            const UUID = generateUUID()

            const now = new Date()

            await this.repository.createUser(new UserEntity(UUID, name, email, password, phone, now, now))
            return new CreateUserUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            
            return new CreateUserUseCaseResponse(error)
        }
    }
}

export {
    CreateUserUseCase
};

