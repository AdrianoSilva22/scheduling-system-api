import { UserEntity } from "../entity/user"
import { passwordHash } from "../utils/passwordHashUtils"
import { generateUUID } from "../utils/uuid"
import { CreateUserUseCaseRepositoryInterface, DeleteUserByIdUseCaseRepositoryInterface, ListUserByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface, UpdateUserByIdUseCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserByIdUseCaseRequest, DeleteUserByIdUseCaseResponse, ListUserByIdUseCaseRequest, ListUserByIdUseCaseResponse, ListUsersUseCaseResponse, UpdateUserByIdUseCaseRequest, UpdateUserByIdUseCaseResponse } from "./ucio/user"
import { CreateUserUseCaseValidateInterface, DeleteUserByIdUseCaseValidateInterface, ListUserByIdUseCaseValidateInterface, UpdateUserByIdUseCaseValidateInterface } from "./validate/user"

class CreateUserUseCase {
    validate: CreateUserUseCaseValidateInterface
    repository: CreateUserUseCaseRepositoryInterface

    constructor(validate: CreateUserUseCaseValidateInterface, respository: CreateUserUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = respository
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateUser(req)

            if (errorMessage) {
                return new CreateUserUseCaseResponse(errorMessage)
            }

            const { name, email, phone, password, role } = req

            const UUID = generateUUID()

            const now = new Date()

            const status = "ATIVO"

            await this.repository.createUser(
                new UserEntity(
                    UUID,
                    name,
                    email,
                    await passwordHash(password),
                    phone,
                    role,
                    status,
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

    constructor(repository: ListUsersUseCaseRepositoryInterface) {
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
    repository: ListUserByIdUseCaseRepositoryInterface
    validate: ListUserByIdUseCaseValidateInterface

    constructor(repository: ListUserByIdUseCaseRepositoryInterface, validate: ListUserByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async listUserById(req: ListUserByIdUseCaseRequest): Promise<ListUserByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateUserById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new ListUserByIdUseCaseResponse(errorMessage)
            }

            const user = await this.repository.listUserById(req)

            return new ListUserByIdUseCaseResponse(user)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new ListUserByIdUseCaseResponse(error)
        }
    }
}
class UpdateUserByIdUseCase {
    repository: UpdateUserByIdUseCaseRepositoryInterface
    validate: UpdateUserByIdUseCaseValidateInterface
    constructor(repository: UpdateUserByIdUseCaseRepositoryInterface, validate: UpdateUserByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async UpdateUserById(req: UpdateUserByIdUseCaseRequest): Promise<UpdateUserByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateUserById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new UpdateUserByIdUseCaseResponse(errorMessage)
            }

            const { password } = req

            if (password) {
                const passwordHashUpdate = await passwordHash(password)
                req.password = passwordHashUpdate
            }

            const user = await this.repository.updateUserById(req)

            return new UpdateUserByIdUseCaseResponse(user)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new UpdateUserByIdUseCaseResponse(error)
        }
    }
}
class DeleteUserByIdUseCase {
    repository: DeleteUserByIdUseCaseRepositoryInterface
    validate: DeleteUserByIdUseCaseValidateInterface

    constructor(repository: DeleteUserByIdUseCaseRepositoryInterface, validate: DeleteUserByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async deleteUserById(req: DeleteUserByIdUseCaseRequest): Promise<DeleteUserByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateUserById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new DeleteUserByIdUseCaseResponse(errorMessage)
            }
            const { ID } = req
            const user = await this.repository.deleteUserById(ID)

            return new DeleteUserByIdUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new DeleteUserByIdUseCaseResponse(error)
        }
    }
}

export {
    CreateUserUseCase,
    DeleteUserByIdUseCase,
    ListUserByIdUseCase,
    ListUsersUseCase,
    UpdateUserByIdUseCase
}

