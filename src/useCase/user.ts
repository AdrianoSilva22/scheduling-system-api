import { UserEntity } from "../entity/user";
import { passwordHash } from "../utils/passwordHashUtils";
import { generateUUID } from "../utils/uuid";
import { CreateUserUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface } from "./repository/user";
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, ListUsersUseCaseResponse } from "./ucio/user";
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

            await this.repository.createUser(
                new UserEntity(
                    UUID,
                    name,
                    email,
                    await passwordHash(password),
                    phone,
                    now,
                    now))
            return new CreateUserUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new CreateUserUseCaseResponse(error)
        }
    }
}

class ListUsersUseCase {
    repository: ListUsersUseCaseRepositoryInterface

    constructor(repository: ListUsersUseCaseRepositoryInterface
    ) {
        this.repository = repository
    }

    async listUsers(): Promise<ListUsersUseCaseResponse> {
        try {

            const users = await this.repository.getAllUsers()
            return new ListUsersUseCaseResponse(users)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new ListUsersUseCaseResponse(error)
        }
    }
}

export {
    CreateUserUseCase,
    ListUsersUseCase
};

