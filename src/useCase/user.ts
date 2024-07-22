import { hash } from "bcryptjs"
import { UserEntity } from "../entity/user"
import { passwordHash } from "../utils/passwordHashUtils"
import { generateUUID } from "../utils/uuid"
import { CreateUserUseCaseRepositoryInterface, DeleteUsersByIdUseCaseRepositoryInterface, ListUsersByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface, UpdateUsersByIdUseCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserByIdUseCaseRequest, DeleteUserByIdUseCaseResponse, ListUserByIdUseCaseRequest, ListUserByIdUseCaseResponse, ListUsersUseCaseResponse, UpdateUserByIdUseCaseRequest, UpdteUserByIdUseCaseResponse } from "./ucio/user"
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
    repository: UpdateUsersByIdUseCaseRepositoryInterface
    constructor(repository: UpdateUsersByIdUseCaseRepositoryInterface
    ) {
        this.repository = repository
    }

    async UpdateUserById(req: UpdateUserByIdUseCaseRequest): Promise<UpdteUserByIdUseCaseResponse> {
        try {
            let { password } = req
            console.log(password);

            if (password) {
                const passwordHashUpdate = await passwordHash(password)
                password = passwordHashUpdate
            }

            const user = await this.repository.updateUserById(req)

            return new UpdteUserByIdUseCaseResponse(user)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new UpdteUserByIdUseCaseResponse(error)
        }
    }
}
class deleteUserByIdUseCase {
    repository: DeleteUsersByIdUseCaseRepositoryInterface
    constructor(repository: DeleteUsersByIdUseCaseRepositoryInterface
    ) {
        this.repository = repository
    }

    async deleteUserById(req: ListUserByIdUseCaseRequest): Promise<DeleteUserByIdUseCaseResponse> {
        try {
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
    ListUserByIdUseCase,
    ListUsersUseCase,
    UpdateUserByIdUseCase,
    deleteUserByIdUseCase
}