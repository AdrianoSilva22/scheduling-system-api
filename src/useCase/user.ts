import { UserEntity } from "../entity/user"
import { passwordHash } from "../utils/passwordHashUtils"
import { generateUUID } from "../utils/uuid"
import { CreateUserUseCaseRepositoryInterface, ListUsersByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, ListUserByIdUseCaseRequest, ListUserByIdUseCaseResponse, ListUsersUseCaseResponse } from "./ucio/user"
import { CreateUserUseCaseValidateInterface, ListUserByIdUseCaseValidateInterface } from "./validate/user"

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
            const errorMessage = this.validate.validateUser(req)

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

            const users = await this.repository.listUsers()
            return new ListUsersUseCaseResponse(users)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new ListUsersUseCaseResponse(error)
        }
    }
}
class ListUserByIdUseCase {
    repository: ListUsersByIdUseCaseRepositoryInterface
    validate: ListUserByIdUseCaseValidateInterface
    constructor(repository: ListUsersByIdUseCaseRepositoryInterface, validate: ListUserByIdUseCaseValidateInterface
    ) {
        this.repository = repository
        this.validate = validate
    }

    async listUserById(req: ListUserByIdUseCaseRequest ): Promise<ListUserByIdUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateUserById(req)
            
            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new ListUserByIdUseCaseResponse(errorMessage)
            }
            const { id } = req

            const user = await this.repository.listUserById(id)
            return new ListUserByIdUseCaseResponse(user)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new ListUserByIdUseCaseResponse(error)
        }
    }
}

export {
    CreateUserUseCase,
    ListUserByIdUseCase,
    ListUsersUseCase
}

